import { Product } from '@/app/(payload)/payload-types'
import React from 'react'

type Props = {
    product: Product
}
const ProductPage: React.FC<Props> = ({product}: Props) => {
  const {id, title, blurb, details, stock, price} = product;
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{blurb}</div>
      <div>{details}</div>
      <div>{stock}</div>
      <div>{price}</div>
    </div>
  )
}

export default ProductPage