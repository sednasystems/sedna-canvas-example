import type { Request } from 'express';

import type { UIKitRequestBody, UIKitResponseBody } from '../types';

/**
 * Base class for all app controllers
 */
export abstract class AppController {
  private _requestBody: UIKitRequestBody;

  /**
   * A unique name for the module. This is necessary to dynamically load and map controllers.
   */
  public static moduleName: string;

  constructor(request: Request) {
    this._requestBody = request.body;
  }

  /**
   * Returns the UIKitResponse body by calling the abstract run method
   */
  public getResponse(): Promise<UIKitResponseBody> {
    return this.run(this._requestBody);
  }

  /**
   * Abstract method that must be implemented by all controllers. This method must return the UIKit response body.
   */
  protected abstract run(requestBody: UIKitRequestBody): Promise<UIKitResponseBody>;
}
