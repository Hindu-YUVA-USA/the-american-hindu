import type { Field } from 'payload'

import deepMerge from '../utilities/deepMerge'
import formatCartTotal from '../utilities/formatCartTotal'

type SubTotal = (overrides?: Partial<Field>) => Field

export const cartTotalField: SubTotal = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'cartTotal',
      hooks: {
        beforeChange: [formatCartTotal()],
      },
      label: 'Cart Total',
      type: 'number',
    },
    overrides,
  )
