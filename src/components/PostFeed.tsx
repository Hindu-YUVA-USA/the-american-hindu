import { fetchDocs } from '@/app/(app)/_api/fetchDocs'
import { Post } from '@/app/(payload)/payload-types'
import { notFound } from 'next/navigation'
import PostTile from './PostTile'

const PostFeed = async () => {
  let posts: Post[] | null = null

  try {
    posts = await fetchDocs<Post[]>({ collection: 'posts', draft: true })
  } catch (error) {
    console.log(error)
  }
  if (posts) {
    return posts.map((post) => (
      <div className="grid grid-cols-3 px-10">
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
        <PostTile key={post.id} post={post} />
      </div>
    ))
  }
  return notFound()
}

export default PostFeed
