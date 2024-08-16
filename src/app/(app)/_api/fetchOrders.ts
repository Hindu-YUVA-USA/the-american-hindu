import type { User, Order } from '@/app/(payload)/payload-types'

import { ORERS_BY_USER } from '../_graphql/orders'

export const fetchOrders = async (args: {
  user?: User['id']
}): Promise<Order[]> => {
  const { user } = args || {}

  const docs: Order[] = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    body: JSON.stringify({
      query: ORERS_BY_USER,
      variables: {
        user,
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
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching docs')

      return res?.data?.Orders?.docs
    })

  return docs
}
