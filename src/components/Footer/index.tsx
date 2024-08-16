import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/app/(payload)/payload-types'

import { fetchFooter } from '@/app/(app)/_api/fetchGlobals'
// import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'


export async function Footer(){
  let footer: Footer | null = null
  
  try {
    const res = await fetchFooter();
    if(res.ok) footer = await res.json()

  } catch (error) {
    // console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className='border bg-[#3A3E40] text-white w-full h-40 p-10 flex gap-10 items-cetner justify-between'>
        <Link href="/">
        </Link>
        <nav className='flex items-center justify-center gap-5'>
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </nav>
    </footer>
  )
}