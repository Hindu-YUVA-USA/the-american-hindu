import {Block} from "payload";

export const TextBlock: Block = {
    slug: 'textBlock',
    fields: [
        {
            name: 'content',
            type: 'richText'
        }
    ]
}