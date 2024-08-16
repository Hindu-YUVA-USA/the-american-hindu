import {Block} from "payload";

export const MediaBlock: Block = {
    slug: 'mediaBlock',
    fields: [
        {
            name: 'size',
            type: 'select',
            options: [
                {
                    label: 'small',
                    value: 'small'
                },
                {
                    label: 'medium',
                    value: 'medium'
                },
                {
                    label: 'large',
                    value: 'large'
                }
            ]
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'description',
            type: 'textarea'
        },
    ]
}