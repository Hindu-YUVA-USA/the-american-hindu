import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import addToStripeCatalog from '../stripe/actions/addToStripeCatalog'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        await addToStripeCatalog(doc)
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blurb',
      type: 'textarea',
      maxLength: 1000,
    },
    {
      name: 'details',
      type: 'textarea',
      required: true,
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'array',
      fields: [
        {
          name: 'attachment',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      minRows: 1,
      required: true,
    },
    slugField(),
  ],
}
