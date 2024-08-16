import { User } from '@/app/(payload)/payload-types'

export type UserCart = {
  user: User
  items: {
    itemId: string
    quantity: number
    subTotal: number
  }[]
  total: number
}
