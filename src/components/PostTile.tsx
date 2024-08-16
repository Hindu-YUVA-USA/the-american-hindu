'use client'
import { Post } from '@/app/(payload)/payload-types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PostTile: React.FC<{ post: Post }> = ({ post }) => {
  const { slug, tags, createdAt, author, contentHTML, title, mainImage, content } = post
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  })
  return (
    <>
      {domLoaded ? (
        <div className="border border-slate-300 overflow-clip p-5 flex flex-col gap-10">
          <Link href={`/posts/${slug}`} className="flex flex-col p-1">
            <div className="flex items-start justify-start gap-2">
              {tags?.map((tag) => (
                <>
                  {typeof tag === 'object' ? (
                    <h1
                      key={tag.id}
                      className="p-2 bg-slate-700 rounded-md text-xs text-white font-bold"
                    >
                      {tag.name}
                    </h1>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <div className="mt-2">
              <h1 className="flex items-center justify-start font-serif text-2xl">{title}</h1>
            </div>
            {/* image */}
            {/* <Image src="/logo.png" alt="img" width={256} height={256} /> */}
            <div>
              {typeof mainImage == 'object' ? (
                <img
                  className="w-full h-64 object-cover rounded-md"
                  src={mainImage?.url || ''}
                  alt={mainImage?.alt || 'img'}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="mt-2 flex flex-col ">
              <div className="flex items-center justify-start gap-2">
                <h1 className="flex items-center justify-start font-bold text-sm">
                  {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h1>
                <h1 className="text-2xl">&#x2022;</h1>
                <h1>
                  {typeof author === 'object' ? author?.firstName + ` ` + author?.lastName : ``}
                </h1>
              </div>
              <section
                className="previewText"
                dangerouslySetInnerHTML={{ __html: contentHTML ? contentHTML : `` }}
              ></section>
            </div>
          </Link>
        </div>
      ) : (
        <div className="border p-5 flex flex-col gap-5">
          {/* tags */}
          <div className="bg-slate-200 w-20 h-5 rounded-xl animate-pulse"></div>
          {/* title */}
          <div className="bg-slate-200 w-full h-5 rounded-xl animate-pulse"></div>
          {/* image */}
          <div className="bg-slate-200 w-full h-64 rounded-xl animate-pulse"></div>
          {/* date & author */}
          <div className="bg-slate-200 w-80 h-5 rounded-xl animate-pulse"></div>
          {/* preview */}
          <div className="bg-slate-200 w-full h-5 rounded-xl animate-pulse"></div>
          <div className="bg-slate-200 w-full h-5 rounded-xl animate-pulse"></div>
          <div className="bg-slate-200 w-full h-5 rounded-xl animate-pulse"></div>
        </div>
      )}
    </>
  )
}

export default PostTile
