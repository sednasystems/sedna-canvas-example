import { readdirSync } from 'fs';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

import { AppController } from '../common/app-controller';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const files = readdirSync(__dirname);

const imports = files
  .filter((file) => file !== 'index.ts' && extname(file) === '.ts')
  .map(async (file) => {
    const modulePath = join(__dirname, file);
    const module = await import(modulePath);
    return module;
  });

// Dynamically import all controllers in the directory
const controllerModules = await Promise.all(imports);

const controllers = controllerModules.map((module) => module.default);

if (controllerModules.length !== controllers.length) {
  console.error('[WARNING] All controller files must export a default class.');
}

if (
  // eslint-disable-next-line no-prototype-builtins
  !controllers.every((controller) => AppController.prototype.isPrototypeOf(controller.prototype))
) {
  console.error('[WARNING] All controllers must extend the AppController class.');
}

if (!controllers.every((controller) => controller.moduleName)) {
  console.error('[WARNING] All controllers must have a static moduleName property.');
}

const controllerMap = new Map(
  controllers
    .filter((controller) => !!controller?.moduleName)
    .map((controller) => [controller.moduleName, controller]),
) satisfies Map<string, typeof AppController>;

if (controllers.length !== controllerMap.size) {
  console.error(
    '[WARNING] Unable to load all controllers. Check to make sure that each controller class has a unique moduleName.',
  );
}

export default controllerMap;
