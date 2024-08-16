import { Order, User } from '@/app/(payload)/payload-types'
import AccountCard from '@/components/AccountCard'
import React from 'react'

type AccountClientProps = {
  user: User
  orders: Order[]
}

const AccountClient: React.FC<AccountClientProps> = ({ user, orders }) => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-semibold">{`Welcome, ${
        user.firstName + ` ` + user.lastName
      }`}</h1>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="grid grid-cols-3 gap-10  items-center justify-center">
          <AccountCard title="Cart" link="/cart" />
          <AccountCard title="Orders" link="/orders" />
          <AccountCard title="Profile" link="/profile" />
        </div>
      </div>
    </div>
  )
}

export default AccountClient
