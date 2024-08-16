import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  description: 'An online publication of Dharmic content!',
  //   images: [
  //     {
  //       url: 'https://payloadcms.com/images/og-image.jpg',
  //     },
  //   ],
  siteName: 'The American Hindu',
  title: 'Payload Public Demo',
  type: 'website',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
