import Stripe from 'stripe'
import { Product } from '../../payload-types'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
})

type addToStripeCatalogResponse =
  | {
      success: true
      clientSecret: string
    }
  | {
      success: false
      error: string
    }

type CatalogItem = {
  stripeProductId: string
  stock: number
  stripePriceId: string
}
const createProduct = async (product: Product) => {
  const newProduct = await stripe.products.create({
    id: product.id,
    name: product.title,
    active: true,
    url: 'https://www.google.com',
    description: product.blurb || '',
    default_price_data: {
      currency: 'usd',
      unit_amount: product.price * 100,
    },
  })
  return newProduct
}

export default async function addToStripeCatalog(product: Product) {
  console.log('REACHED HOOK')
  const productExists = await stripe.products.search({
    query: `name: "${product.title}"`,
  })
  if (productExists.data.length > 0) {
    console.log('PRODUCT EXISTS')
    await stripe.products.del(product.id)
    await createProduct(product)
  } else {
    await createProduct(product)
  }
}
