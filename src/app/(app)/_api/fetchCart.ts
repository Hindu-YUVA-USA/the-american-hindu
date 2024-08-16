import type { Cart } from '@/app/(payload)/payload-types'

import { getMeUser } from '@/app/(payload)/utilities/getMeUser'
import { CART_BY_USER } from '../_graphql/cart'

export const fetchCart = async (): Promise<Cart> => {
  console.log('GETTIG USER...')
  const id = (await getMeUser()).user.id
  // const id = user.id
  const docs: Cart = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    body: JSON.stringify({
      query: CART_BY_USER,
      variables: {
        id,
      },
    }),
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    ?.then((res) => res.json())
    ?.then((res) => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching cart')

      console.log(res)
      return res?.data?.Carts?.docs[0]
    })

  return docs
}
