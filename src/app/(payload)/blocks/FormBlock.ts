import { Block } from "payload";

export const FormBlock: Block = {
    slug: 'form',
    fields: [
        {
            name: 'fields',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'description',
                    type: 'textarea'
                },
                {
                    name: 'required',
                    type: 'checkbox'
                },
            ]
        },
        {
            name: 'button',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'text'
                },
                {
                    name: 'style',
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
                }
            ]
        }
    ]
}