import { Cart } from '@/app/(payload)/payload-types'
import React from 'react'
// import { UserCart } from 'types'

type CartClientProps = {
  userCart: Cart
}

const CartPage: React.FC<CartClientProps> = ({ userCart }) => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-serif">Cart Page</h1>
      {/* {userCart.items?.map((item)=> {if(typeof item === 'object') {
        (return <div></div>)}
      })} */}
    </div>
  )
}

export default CartPage
