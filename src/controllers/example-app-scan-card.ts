import { CanvasRequest, CanvasResponse } from '@sednasystems/canvas-schema';

export default function exampleApp(requestBody: CanvasRequest): CanvasResponse {
  return {
    "surfaces": [
    {
      "type": "scanCard",
      "id": "simple-card",
      "props": {
        "title": "HELLO WORLD",
        "link": {
          "title": "External Link",
          "href": "https://sedna.com/"
        },
        "app": {
          "name": "Sedna",
          "image": "https://cdn.prod.website-files.com/655391b7802bd90dcdf0b98e/655391b7802bd90dcdf0b9bd_Sedna_Favicon.png"
        },
        "maxHeight": "300px"
      },
      "blocks": [
        {
          "type": "section",
          "elements": [
            {
              "type": "markdown",
              "content": "# Heading 1\n## Heading 2\n### Heading 3\n**Bold Text**\n*Italic Text*\n***Bold and Italic***\n~~Strikethrough~~\n\n`Inline Code`\n\n```\nCode Block\nMultiple lines\n```\n\n[Link Text](https://example.com)\n\n> Blockquote\n> Multiple lines\n> In blockquote\n\n- Unordered list item 1\n- Unordered list item 2\n  - Nested item 2.1\n  - Nested item 2.2\n\n1. Ordered list item 1\n2. Ordered list item 2\n   1. Nested ordered item 2.1\n   2. Nested ordered item 2.2\n\n---\n\n![Image Alt Text](https://cdn.prod.website-files.com/655391b7802bd90dcdf0b98e/6671a9b9dddcc5149c1b93ec_Sedna_Highlight_Product_Stream_2-p-500.avif)\n\nText with ==highlight== and ^superscript^ and ~subscript~\n\n"
            }
          ]
        }
      ]
    }
  ]
  };
}
