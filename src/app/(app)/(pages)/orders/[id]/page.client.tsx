import React from 'react'
import type { Order, Product, User } from '@/app/(payload)/payload-types'
import { isObject } from '@/app/(payload)/utilities/deepMerge'
import { Users } from '@/app/(payload)/collections/Users'
import Image from 'next/image'

type Props = {
  order: Order
}


const OrderPage: React.FC<Props> = ({order}: Props) => {
  const {orderTotal} = order;
  // return (
  //   <div>
  //       <h1>{id}</h1>
  //       <h1>{items.map(({id, product, quantity}) => (
  //           <div key={id}>
  //               {typeof(product) === 'object' && (
  //                 <div>
  //                   <h1>{product.title}</h1>
  //                   {typeof(product.image) === 'object' && typeof(product.image?.at(0)?.attachement) === 'object' && (
  //                     <Image src={product.image?.at(0)?.attachement.url}/>
  //                   )}
  //                 </div>
  //               )}
  //               <h1>{quantity}</h1>
  //           </div>
  //       ))}</h1>
  //       <h1>{typeof(user) === 'object' && user.firstName}</h1>
  //       <h1>{orderTotal}</h1>
  //   </div>
  // )
  return (
    <div>
      <h1>{orderTotal}</h1>
    </div>
  )
}

export default OrderPage