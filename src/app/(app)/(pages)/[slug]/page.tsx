'use client'
import type { Page } from '@/app/(payload)/payload-types'
import { useEffect, useState } from 'react'

type PageProps = {
  slug: string
}

const Page = ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const [page, setPage] = useState<Page[]>()

  useEffect(() => {
    // console.log(params.slug);
    fetchPage(params.slug)
  }, [params.slug])

  const fetchPage = async (slug: string) => {
    const res = await fetch(`/api/pages/${slug}`)
    if (res.ok) {
      const page = await res.json()
      return setPage(page.docs)
    }
  }
  if (page) {
    return (
      <div className="flex flex-col gap-5 mx-20 my-20 px-40">
        <h1>{page && (page ? page[0].title : 'Not found')}</h1>
        <h1>{page && (page ? page[0].title : 'Not found')}</h1>
      </div>
    )
  }
}

export default Page
