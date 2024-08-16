import { fetchDoc } from '@/app/(app)/_api/fetchDoc'
import { Post as PostType } from '@/app/(payload)/payload-types'
import { notFound } from 'next/navigation'
import PostClient from './page.client'

type PostProps = {
  params: {
    slug: string
  }
}
const Post = async ({ params }: PostProps) => {
  let post: PostType | null = null

  try {
    post = await fetchDoc<PostType>({ collection: 'posts', draft: true, slug: params.slug })
  } catch (error) {}
  if (post) {
    return <PostClient post={post} />
  }
  return notFound()
}

export default Post
