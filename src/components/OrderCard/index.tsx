import { Order } from '@/app/(payload)/payload-types'
import { formatDate } from '@/app/(payload)/utilities/formatDate'
import OrderItem from '../OrderItem'

type Props = {
  order: Order
}

const OrderCard: React.FC<Props> = ({ order }) => {
  const { id, items, orderTotal, createdAt } = order
  return (
    <div className=" flex flex-col w-full rounded-md bg-[#dddddd]" key={id}>
      <div className="bg-gray-200 w-full h-20 flex p-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <h1>Order Placed</h1>
              <h1>{formatDate(createdAt)}</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1>Order Total</h1>
              <h1>{orderTotal}</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>Order Id</h1>
            <h1>{id}</h1>
          </div>
        </div>
      </div>
      <div className="w-full">
        {Array.isArray(items) &&
          items.map((item) => (
            <div key={item.id}>{typeof item === 'object' ? <OrderItem item={item} /> : <></>}</div>
          ))}
      </div>
    </div>
  )
}

export default OrderCard
