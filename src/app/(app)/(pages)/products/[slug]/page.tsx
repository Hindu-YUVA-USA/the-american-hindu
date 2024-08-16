import type { Product as ProductType } from '@/app/(payload)/payload-types'
import { notFound } from 'next/navigation'
import { CollectionSlug } from 'payload'
import { fetchDoc } from '../../../_api/fetchDoc'
import ProductPage from './page.client'

type Props = {
  params: {
    slug: CollectionSlug
  }
}

const Product: React.FC<Props> = async ({ params }: Props) => {
  let product: ProductType | null = null

  try {
    product = await fetchDoc<ProductType>({
      collection: 'products',
      draft: true,
      slug: params.slug,
    })
  } catch (error) {}

  if (product) {
    return <ProductPage product={product} />
  }
  return notFound()
}

export default Product
