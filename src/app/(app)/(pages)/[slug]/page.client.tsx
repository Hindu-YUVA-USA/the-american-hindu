'use client'

// import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Page } from '@/app/(payload)/payload-types'
import { pages } from 'next/dist/build/templates/app-page'

// import { Blocks } from '../../_components/Blocks'
// import { Hero } from '../../_components/Hero'

export const PageClient: React.FC<{
  page: Page
}> = ({ page: initialPage }) => {
  return (
    <div>
      <h1>{pages.name}</h1>
      <h1>{pages.content}</h1>
    </div>
  )
}
