'use client'

import { useAuth } from '@/app/(app)/_providers/AuthProvider'
import Input from '@/components/Input'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

type MyFormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = useState<null | string>(null)

  const {
    formState: { errors, isLoading },
    handleSubmit,
    register,
  } = useForm<MyFormData>()

  const onSubmit = useCallback(
    async (data: MyFormData) => {
      try {
        await login(data)
        if (redirect?.current) router.push(redirect.current)
        else router.push('/account')
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.')
      }
    },
    [login, router],
  )

  return (
    <form className="m-5 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <p>
        {`This is where your users will login to manage their account, view their comment history, and more. To manage all users, `}
        <Link href="/admin/collections/users">login to the admin dashboard</Link>.
      </p>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 px-20 py-10">
          <Input
            label="Email Address"
            register={register}
            name="email"
            type="email"
            required
            error={errors.email}
          />
          <Input
            label="Password"
            register={register}
            name="password"
            type="password"
            required
            error={errors.password}
          />
          <button className="border p-2 w-20 flex items-center justify-center" type="submit">
            <h1 className="">Login</h1>
          </button>
        </div>
      </div>
      <div>
        <Link href={`/create-account${allParams}`}>Create an account</Link>
        <br />
        <Link href={`/recover-password${allParams}`}>Recover your password</Link>
      </div>
    </form>
  )
}

export default LoginForm
