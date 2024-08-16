import { fetchDoc } from "@/app/(app)/_api/fetchDoc"
import { Order as OrderType } from "@/app/(payload)/payload-types"
import OrderPage from "./page.client"
import { notFound } from "next/navigation"

type Props = {
    params: {
        id: string
    }
}
const Order: React.FC<Props> = async ({params} : Props) => {
    let order: OrderType | null = null

    try {
        order = await fetchDoc<OrderType>({collection: 'orders', draft: true, id: params.id})
        console.log(order)
    } catch (error) {}

    if(order){
        return (
            <OrderPage order={order} />
        )
    }
    return (
        <div>hi</div>
    )
}
export default Order