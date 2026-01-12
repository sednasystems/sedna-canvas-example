import { CanvasRequest, CanvasResponse } from '@sednanetwork/canvas-schema';

export default function exampleApp(requestBody: CanvasRequest): CanvasResponse {
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
