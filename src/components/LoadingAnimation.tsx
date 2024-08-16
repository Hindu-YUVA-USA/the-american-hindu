import Image from 'next/image'
import React from 'react'

const LoadingAnimation = () => {
  return (
    <div className='flex h-96 items-center justify-center'>
        <div className='flex flex-col p-5 gap-5 items-center justify-center'>
          <Image
              className='rounded-full'
              src="/logo.png"
              alt='Logo'
              width={150}
              height={150} />
          <div className='flex flex-col items-center gap-2'>
              <h1 className='font-serif text-4xl font-extrabold'>The American Hindu</h1>
              <h1>Educate. Empower. Advocate</h1>
              <h1>LOADING...</h1>
              {/* <Socials/> */}
          </div>
        </div>
    </div>
  )
}

export default LoadingAnimation