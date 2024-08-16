import type { CollectionConfig } from "payload";
import { textarea } from "payload/shared";


export const Comments: CollectionConfig = {
    slug: 'comments',
    admin:{
        useAsTitle: 'comment'
    },
    fields:[
        {
            name: 'comment',
            type: 'textarea',
            required: true
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true
        },
        {
            name: 'post',
            type: 'relationship',
            relationTo: 'posts',
            required: true,
        }
    ]
}