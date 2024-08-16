import Image from 'next/image'
import React from 'react'

const Socials:React.FC<{}> = () => {
  return (
    <div className='flex items-center justify-evenly gap-3 p-2'>
            <div className='flex items-center justify-center bg-[#17181E] w-7 h-7 rounded-full'>
            <Image
              src="/icons/x.svg"
              alt='x'
              width={15}
              height={15}
            />
            </div>
            <div className='flex items-center justify-center bg-[#17181E] w-7 h-7 rounded-full p-1'>
            <Image
              src="/icons/facebook.svg"
              alt='x'
              width={15}
              height={15}
            />
            </div>
            <div className='flex items-center justify-center bg-[#17181E] w-7 h-7 rounded-full'>
            <Image
              src="/icons/instagram.svg"
              alt='x'
              width={15}
              height={15}
            />
            </div>
          </div>
  )
}

export default Socials