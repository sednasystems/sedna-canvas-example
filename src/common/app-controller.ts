import type { Request } from 'express';

import type { CanvasRequestBody, CanvasResponseBody } from '../types';

/**
 * Base class for all app controllers
 */
export abstract class AppController {
  private _requestBody: CanvasRequestBody;

  /**
   * A unique name for the module. This is necessary to dynamically load and map controllers.
   */
  public static moduleName: string;

  constructor(request: Request) {
    this._requestBody = request.body;
  }

  /**
   * Returns the CanvasResponse body by calling the abstract run method
   */
  public getResponse(): Promise<CanvasResponseBody> {
    return this.run(this._requestBody);
  }

  /**
   * Abstract method that must be implemented by all controllers. This method must return the canvas response body.
   */
  protected abstract run(requestBody: CanvasRequestBody): Promise<CanvasResponseBody>;
}
