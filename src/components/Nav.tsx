'use client'
import { useAuth } from '@/app/(app)/_providers/AuthProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Nav: React.FC<{}> = () => {
  const { status } = useAuth()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <section className="border w-full flex items-center justify-between p-10">
      {/* Menu Bar */}
      <div>
        <Image
          className="hover:cursor-pointer"
          src="/icons/menu.svg"
          alt="search-icon"
          width={30}
          height={30}
        />
      </div>
      {/* Logo + Title */}
      <div>
        <Link href="/" className="flex gap-5 h-full items-center ml-3">
          <Image className="rounded-full" src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-3xl font-serif font-semibold">The American Hindu</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        {/* Search Icon */}
        <Image src="/icons/search.svg" alt="search-icon" width={30} height={30} />
        {/* Signin */}
        {domLoaded ? (
          status == 'loggedIn' ? (
            <Link href="/account">
              <Image
                className="rounded-full border-black border-2"
                src="/icons/user.svg"
                width={30}
                height={30}
                alt="user"
              />
            </Link>
          ) : (
            <Link href="/login">
              <div className="py-2 px-3 w-28 bg-black flex items-center justify-center rounded-md gap-1">
                <h1 className="text-white">Sign In</h1>
              </div>
            </Link>
          )
        ) : (
          <div className="w-10 h-10 rounded-full animate-pulse bg-slate-200"></div>
        )}
      </div>
    </section>
  )
}

export default Nav
