import type { Field } from 'payload'

import deepMerge from '../utilities/deepMerge'
import formatOrderTotal from '../utilities/formatOrderTotal'

type SubTotal = (overrides?: Partial<Field>) => Field

export const orderTotalField: SubTotal = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'orderTotal',
      hooks: {
        beforeChange: [formatOrderTotal()],
      },
      label: 'Order Total',
      type: 'number',
    },
    overrides,
  )
