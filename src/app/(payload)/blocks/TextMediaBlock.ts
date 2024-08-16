import {Block} from "payload";

export const TextMediaBlock: Block = {
    slug: 'textMedia',
    fields: [
        {
            name: 'content',
            type: 'textarea'
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media'
        },
    ]
}