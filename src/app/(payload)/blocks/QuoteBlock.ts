import { Block } from "payload";

export const QuoteBlock: Block = {
    slug: 'quote',
    fields: [
        {
            name: 'quote',
            type: 'textarea'
        }
    ]
}