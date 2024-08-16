'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type ProductTileProps = {
  slug: string
  image: string
  title: string
  price: string
}

const ProductTile: React.FC<ProductTileProps> = ({ slug, image, title, price }) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  })
  return (
    <>
      {domLoaded ? (
        <Link
          href={`/products/${slug}`}
          className="flex flex-col h-96 w-96 items-start justify-center rounded-lg gap-2 p-2 shadow-lg"
        >
          <img src={image} className="h-[80%] w-full bg-slate-200 rounded-lg object-fill" />
          <h1 className="text-xl font-bold">{title}</h1>
          <div className=" w-full flex items-center justify-end">
            <h1 className="text-2xl font-bold">{`\$${price}`}</h1>
          </div>
        </Link>
      ) : (
        <>
          <div className="flex flex-col h-96 w-96 items-start justify-center rounded-lg gap-2 p-2 shadow-lg">
            <div className="h-[70%] w-full bg-slate-200 animate-pulse  rounded-lg"></div>
            <div className="h-[10%] w-[20%] bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="h-[10%] w-[10%] bg-slate-200 animate-pulse rounded-lg"></div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductTile
