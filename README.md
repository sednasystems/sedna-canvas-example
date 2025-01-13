# Canvas Server Guide

This project contains an example server built with the Express framework written in Typescript. The server acts as a gateway for multiple Canvas apps, where each app is handled by an app controller. You're free to build your own implementation that suits your needs, however, as long as the response conforms to the [Canvas schema](https://github.com/sednasystems/sedna-canvas-example/blob/main/schemas/canvas-response-schema.json).

## Quick Start

- Use the Node version found in the .nvmrc file. This project uses `v21.1.0`.
- `pnpm install`
- `cp config.example.json config.json`
- Update `config.json` with correct app credentials.

  If using workshop, these can be found by running `workshop/bin/create-canvas-app.sh` from the `services` repo

- `pnpm dev` to start the Express server (this updates on changes via `nodemon`)

## Adding a new App

- Rename the example controller file [`example-app.ts`](https://github.com/sednasystems/sedna-canvas-example/blob/main/src/controllers/example-app.ts) in `src/controllers` to a name of your choice.
- Rename `ExampleAppController` and the `moduleName` in the class. The `moduleName` must be unique for all additional apps.
- Rename the `"ExampleApp"` entry in `config.json` with the key being the value of `moduleName` you set in the previous step. For example, if you set `moduleName` as `'FirstApp'`, the key in the configuration file must also be `"FirstApp"`.
- Set the values of `appId` and `tenantId` to real ones. These should be match what is in the request body at `body.appId` and `body.company.id`.

## Reference files

`example-app.ts`

```
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
```

`config.example.json`

```
{
  "ExampleApp": [
    {
      "appId": "APP_ID",
      "tenantId": "TENANT_ID"
    }
  ]
}
```
