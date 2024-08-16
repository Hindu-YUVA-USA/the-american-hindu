import { type FieldHook } from 'payload'

const formatSubTotal =
  (): FieldHook =>
  ({ siblingData, collection }) => {
    let total = 0
    if (siblingData.items.length > 0) {
      siblingData.items.map((item: any) => {
        total += item.subtotal
      })
    }
    return total
  }

export default formatSubTotal
