import Link from 'next/link'
import React from 'react'

import type { Page } from '@/app/(payload)/payload-types'
import type { Props as ButtonProps } from '../Button'

import { Button } from '../Button'

type CMSLinkType = {
  appearance?: ButtonProps['appearance']
  children?: React.ReactNode
  className?: string
  invert?: ButtonProps['invert']
  label?: string
  newTab?: boolean | null | undefined
  reference?: {
    relationTo: 'pages'
    value: Page | string
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = ({
  appearance,
  children,
  className,
  invert,
  label,
  newTab,
  reference,
  type,
  url,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `/${reference.value.slug}`
      : url

  if (!href) return null

  if (!appearance) {
    const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

    if (href || url) {
      return (
        <Link {...newTabProps} className={className} href={href || url || ``}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  return (
    <Button
      appearance={appearance}
      className={className}
      href={href}
      invert={invert}
      label={label}
      newTab={newTab ? newTab : false}
    />
  )
}
