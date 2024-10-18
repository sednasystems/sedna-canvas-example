import type { Request } from 'express';

import { AppController } from '../common/app-controller';
import type { CanvasRequestBody, CanvasResponseBody } from '../types';

export default class ExampleAppController extends AppController {
  public static moduleName = 'ExampleApp';

  public constructor(request: Request) {
    super(request);
  }

  protected async run(requestBody: CanvasRequestBody) {
    const responseBody = {
      surfaces: [
        {
          id: 'example',
          type: 'dashboard',
          blocks: [
            {
              type: 'section',
              elements: [
                {
                  type: 'text',
                  content: `Hello, ${requestBody.user.firstName}!`,
                },
              ],
            },
          ],
        },
      ],
    } satisfies CanvasResponseBody;

    return responseBody;
  }
}
