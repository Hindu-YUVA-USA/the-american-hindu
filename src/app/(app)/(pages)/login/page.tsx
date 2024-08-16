import { getMeUser } from '@/app/(payload)/utilities/getMeUser'
import { mergeOpenGraph } from '@/app/(payload)/utilities/mergeOpenGraph'
import { Metadata } from 'next'
import LoginForm from './LoginForm'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-serif">Login</h1>
      <LoginForm />
    </div>
  )
}

export const metadata: Metadata = {
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
  title: 'Login',
}
