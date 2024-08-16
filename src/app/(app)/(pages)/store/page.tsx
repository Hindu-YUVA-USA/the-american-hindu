import { Product } from '@/app/(payload)/payload-types'
import ProductTile from '@/components/ProductTile'
import { fetchDocs } from '../../_api/fetchDocs'

const Store: React.FC<{}> = async () => {
  let products: Product[] | null = null
  try {
    products = await fetchDocs<Product[]>({ collection: 'products', draft: true })
    console.log(products[0].image[0].attachment?.url)
  } catch (error) {
    console.log(error)
  }
  if (products) {
    return (
      <div className="flex flex-col items-center justify-center p-20 gap-10">
        <h1 className="text-3xl">TAH Store</h1>
        <div className="flex gap-5">
          <div className="grid grid-cols-2 items-center justify-center w-full p-5  gap-52">
            {products.map((product) => (
              <ProductTile
                slug={product.slug}
                image={product.image[0].attachment?.url || ''}
                title={product.title}
                price={product.price.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center p-20 gap-10">
        <h1 className="text-3xl">TAH Store</h1>
        <div className="flex gap-5 h-full">
          <h1 className="text-3xl">No Products found</h1>
        </div>
      </div>
    )
  }
}

export default Store
