import type { CollectionConfig } from 'payload'
import { orderTotalField } from '../fields/orderTotal'
import { subTotalField } from '../fields/subTotal'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    orderTotalField(),
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          min: 1,
          required: true,
        },
        subTotalField(),
      ],
      minRows: 1,
      required: true,
    },
  ],
}
