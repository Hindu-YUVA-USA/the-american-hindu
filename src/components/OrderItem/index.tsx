import { Product } from '@/app/(payload)/payload-types'
import Image from 'next/image'

type Props = {
  item: {
    product: string | Product
    quantity: number
    subtotal: number
  }
}

const OrderItem: React.FC<Props> = ({ item }) => {
  const { product, quantity, subtotal } = item
  return (
    <>
      {typeof product === 'object' ? (
        <div className="flex items-center justify-between p-5">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-xl">{product.title}</h1>
            {typeof product.image[0].attachment === 'object' ? (
              <div>
                <Image
                  src={product.image[0].attachment?.url ? product.image[0].attachment?.url : ``}
                  width={100}
                  height={100}
                  alt={product.image[0].attachment?.alt ? product.image[0].attachment?.alt : ``}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-5 items-center justify-end">
            <h1 className="text-base">{`x ${quantity}`}</h1>
            <h1 className="text-xl">{`$ ${subtotal}`}</h1>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default OrderItem
