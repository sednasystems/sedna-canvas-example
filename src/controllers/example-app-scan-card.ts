import { CanvasRequest, CanvasResponse } from '@sednanetwork/canvas-schema';

export default function exampleScanCardApp(requestBody: CanvasRequest): CanvasResponse {

  const messageSubject =
    requestBody.context.display === 'MESSAGE_READ' ||
    requestBody.context.display === 'MESSAGE_COMPOSE'
      ? (requestBody.context.entity as any)?.subject
      : null;


  const MARKDOWN_CONTENT = `
# Hello, ${requestBody.user.firstName}!
## From Company ${requestBody.company?.name}
### Looking at Message ID: ${requestBody.context.entity?.id}

**MESSAGE SUBJECT**

*${messageSubject || 'N/A'}*

***Bold and Italic***

~~Strikethrough~~

\`Inline Code\`

\`\`\`
Code Block
Multiple lines
\`\`\`

[Link Text](https://example.com)

> Blockquote
> Multiple lines
> In blockquote

- Unordered list item 1
- Unordered list item 2
  - Nested item 2.1
  - Nested item 2.2

1. Ordered list item 1
2. Ordered list item 2
   1. Nested ordered item 2.1
   2. Nested ordered item 2.2

---

![Image Alt Text](https://cdn.prod.website-files.com/655391b7802bd90dcdf0b98e/6671a9b9dddcc5149c1b93ec_Sedna_Highlight_Product_Stream_2-p-500.avif)

Text with ==highlight== and ^superscript^ and ~subscript~
`;

 return {
    surfaces: [
      {
        type: 'scanCard',
        id: 'simple-card',
        props: {
          title: `Hello, ${requestBody.user.firstName}!`,
          link: {
            title: 'External Link',
            href: 'https://sedna.com/'
          },
          app: {
            name: 'Sedna',
            image: 'https://cdn.prod.website-files.com/655391b7802bd90dcdf0b98e/655391b7802bd90dcdf0b9bd_Sedna_Favicon.png'
          },
          maxHeight: '300px'
        },
        blocks: [
          {
            type: 'section',
            elements: [
              {
                type: 'markdown',
                content: MARKDOWN_CONTENT,
              }
            ]
          }
        ]
      }
    ]
  };
}