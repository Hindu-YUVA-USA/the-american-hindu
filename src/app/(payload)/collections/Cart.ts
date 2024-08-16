import { CollectionConfig } from 'payload'
import { cartTotalField } from '../fields/cartTotal'
import { subTotalField } from '../fields/subTotal'

export const Cart: CollectionConfig = {
  slug: 'cart',
  admin: {
    // hidden: true,
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
      //   defaultValue: '667faef8b1572bc35dd94627',
    },
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
          required: true,
        },
        subTotalField(),
      ],
    },
    cartTotalField(),
  ],
}
