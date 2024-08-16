import { type FieldHook } from 'payload'

// const format = (qty: number, price: number): number => price * qty

const formatSubTotal =
  (): FieldHook =>
  async ({ req, siblingData }) => {
    // console.log('ENTERED FORMAT')
    // console.log(req)
    const product = await req.payload.find({
      collection: 'products',
      where: {
        id: {
          equals: siblingData.product,
        },
      },
      limit: 1,
    })
    // console.log(product?.docs[0]?.price)
    const price = product?.docs[0]?.price
    return siblingData.quantity * price
  }

export default formatSubTotal
