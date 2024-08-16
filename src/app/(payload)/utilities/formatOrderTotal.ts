import { type FieldHook } from 'payload'
import { Order } from '../payload-types'

const formatSubTotal =
  (): FieldHook =>
  ({ siblingData, collection }) => {
    let total = 0
    siblingData.items.map((item: Order['items'][0]) => {
      total += item?.subtotal
    })
    return total
  }

export default formatSubTotal
