import { Order, User } from '@/app/(payload)/payload-types'
import PastOrders from '@/components/PastOrders'
import React from 'react'

type AccountClientProps = {
  user: User
  orders: Order[]
}

const AccountClient: React.FC<AccountClientProps> = ({ user, orders }) => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-serif">Account Page</h1>
      <h1 className="text-xl font-serif">{`Welcome, ${user.firstName + ` ` + user.lastName}`}</h1>
      <PastOrders orders={orders} />
    </div>
  )
}

export default AccountClient
