# UIKit Server Guide

## Quick Start

- Use the Node version found in the .nvmrc file. This project uses `v21.1.0`.
- Install the dependencies by running `pnpm install`. Here we use pnpm but you can install with a manager of your choice.
- Rename `example.config.json` in the root of the project to `config.json`.
- To start the server in development, run `pnpm dev`. `npm dev` or `yarn dev` if you are using another package manager. This will start the Express server and `nodemon` will listen to any changes during development.

## Adding an App

- Rename the example controller file `example-app.ts` in `src/controllers` to a name of your choice.
- Rename `ExampleAppController` and the `moduleName` in the class. The `moduleName` must be unique for all additional apps.
- Rename the `"ExampleApp"` entry in `config.json` with the key being the value of `moduleName` you set in the previous step. For example, if you set `moduleName` as `'FirstApp'`, the key in the configuration file must also be `"FirstApp"`.
- Set the values of `appId` and `tenantId` to real ones. These should be match what is in the request body at `body.appId` and `body.company.id`.

## Reference files

`example-app.ts`

```
import type { Request } from 'express';

import { AppController } from '../common/app-controller';
import type { UIKitRequestBody, UIKitResponseBody } from '../types';

export default class ExampleAppController extends AppController {
  public static moduleName = 'ExampleApp';

  public constructor(request: Request) {
    super(request);
  }

  protected async run(requestBody: UIKitRequestBody) {
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
    } satisfies UIKitResponseBody;

    return responseBody;
  }
}
```

`example.config.json`

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
