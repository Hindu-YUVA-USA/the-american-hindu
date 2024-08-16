import { fetchCart } from '@/app/(app)/_api/fetchCart'
import { Cart as CartType } from '@/app/(payload)/payload-types'
import CartPage from './page.client'

const Cart: React.FC<{}> = async () => {
  let cart: CartType | null = null

  try {
    cart = await fetchCart()
  } catch (error) {
    console.log(error)
  }

  if (cart) {
    return <CartPage userCart={cart} />
  }
  return <div>hi</div>
}
export default Cart
