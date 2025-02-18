import type { CanvasRequestBody, CanvasResponseBody } from '../types';

export default function exampleApp(requestBody: CanvasRequestBody): CanvasResponseBody {
  return {
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
  };
}
