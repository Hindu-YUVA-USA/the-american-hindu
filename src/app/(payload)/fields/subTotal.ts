import type { Field } from 'payload'

import deepMerge from '../utilities/deepMerge'
import formatSubTotal from '../utilities/formatSubTotal'

type SubTotal = (overrides?: Partial<Field>) => Field

export const subTotalField: SubTotal = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'subtotal',
      hooks: {
        beforeValidate: [formatSubTotal()],
      },
      label: 'Subtotal',
      type: 'number',
      required: true,
    },
    overrides,
  )
