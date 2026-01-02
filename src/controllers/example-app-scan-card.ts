import { CanvasResponse } from '@sednasystems/canvas-schema';

const MARKDOWN_CONTENT = `
# Heading 1
## Heading 2
### Heading 3
**Bold Text**
*Italic Text*
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

export default function exampleScanCardApp(): CanvasResponse {
  return {
    surfaces: [
      {
        type: 'scanCard',
        id: 'simple-card',
        props: {
          title: 'HELLO WORLD',
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