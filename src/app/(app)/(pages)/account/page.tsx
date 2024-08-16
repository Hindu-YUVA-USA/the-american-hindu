import { Order, User } from '@/app/(payload)/payload-types';
import { getMeUser } from '@/app/(payload)/utilities/getMeUser';
import { fetchOrders } from '../../_api/fetchOrders';
import AccountClient from './page.client';



const Account = async () => {
  const {user} = await getMeUser({
      nullUserRedirect: `/login?error=${encodeURIComponent(
        'You must be logged in to access this page.',
      )}&redirect=${encodeURIComponent('/account')}`,
  })

  const orders = await fetchOrders({
      user: user?.id,
  })

  return (
    <AccountClient user={user} orders={orders}/>
  )
}

export default Account