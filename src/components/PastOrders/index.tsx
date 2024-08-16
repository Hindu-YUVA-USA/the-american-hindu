import { Order } from '@/app/(payload)/payload-types'
import OrderCard from '../OrderCard'

type Props = {
  orders: Order[]
}
const PastOrders: React.FC<Props> = ({ orders }) => {
  return (
    <div className="flex flex-col w-full gap-5">
      {orders.length > 0
        ? orders.map((order) => <OrderCard key={order.id} order={order} />)
        : 'No Orders Found...'}
    </div>
  )
}

export default PastOrders
