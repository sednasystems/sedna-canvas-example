import type { Request } from 'express';

import type { AppController } from './common/app-controller';
import type { CanvasRequestBody } from './types';

type Config = Record<string, { tenantId: string; appId: string }[]>;

export class AppError extends Error {
  public status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

/**
 * Dynamically load config from the config.json file in the project root directory. See config.example.json
 * for an example configuration file. The key for each app module must match the moduleName property of the
 * controller class.
 */
export async function loadConfig(): Promise<Config> {
  const config = await import(`${process.cwd()}/config.json`, {
    with: {
      type: 'json',
    },
  }).catch(() => {
    throw new AppError(`Failed to load configuration file from ${process.cwd()}/config.json`);
  });

  return config.default;
}

type ControllerConstructor<T extends AppController> = new (request: Request) => T;

/**
 * Returns an instance of the app controller for the request by matching the app ID and tenant ID from the
 * request body to the configuration, and looking up the controller by the app module name. The controller
 * moduleName must match the key in the configuration JSON from config.json.
 */
export function getController<T extends AppController>(
  request: Request,
  config: Config,
  controllers: Map<string, ControllerConstructor<T>>,
) {
  const body = request.body as CanvasRequestBody;
  const appModuleName = Object.entries(config).find(([, appConfig]) =>
    appConfig.some((app) => app.appId === body.appId && app.tenantId === body.company.id),
  )?.[0];

  if (!appModuleName) {
    throw new AppError(
      `No app module found for app ID ${body.appId} and tenant ID ${body.company.id}`,
      404,
    );
  }

  const Controller = controllers.get(appModuleName);

  if (!Controller) {
    throw new AppError(`No controller found for app module ${appModuleName}`);
  }

  return new Controller(request);
}
