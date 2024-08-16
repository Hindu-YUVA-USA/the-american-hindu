import {CollectionConfig} from "payload";

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    fields: [
        {
            name: 'product',
            type: 'relationship',
            relationTo: 'products',
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users'
        },
        {
            name: 'reviewDate',
            type: 'date',
        },
        {
            name: 'review',
            type: 'textarea',
        },
        {
            name: 'starRating',
            type: 'number',
            min: 1,
            max: 5
        },
    ]
}