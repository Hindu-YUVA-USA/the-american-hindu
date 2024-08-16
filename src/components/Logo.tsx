import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
        className='rounded-full'
        src="/logo.png"
        alt='logo'
        width={200}
        height={200}
    />
  )
}

export default Logo