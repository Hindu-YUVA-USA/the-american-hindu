import { UserCart } from 'types'

export const saveCartToStorage = (cart: UserCart) => {
  window.localStorage.setItem('userCart', JSON.stringify(cart))
}

export const fetchCartFromStorage = async () => {
  const cart = await localStorage.getItem('userCart')
  if (cart) return JSON.parse(cart)
  return null
}
