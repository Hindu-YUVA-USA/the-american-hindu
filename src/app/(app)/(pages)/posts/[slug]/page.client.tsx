import { Media, Tag, User } from '@/app/(payload)/payload-types'
import { formatDate } from '@/app/(payload)/utilities/formatDate'
import '@/styles/richText.css'

type PostClientProps = {
  post: {
    tags: (string | Tag)[]
    title: string
    createdAt: string
    author: string | User
    mainImage?: string | Media | undefined | null
    contentHTML?: string | null
  }
}
const PostClient = ({ post }: PostClientProps) => {
  const { tags, title, createdAt, author, contentHTML, mainImage } = post
  return (
    <div className="flex flex-col gap-5 mx-20 my-20 px-40">
      <div className="flex flex-col gap-5 p-2">
        <div className="flex items-start justify-center gap-2">
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
        <div className="flex flex-col gap-2 items-center justify-center self-center ">
          <h1 className="text-4xl font-serif font-semibold text-center">{title}</h1>
          <div className="flex items-center justify-center gap-2">
            <h1>{formatDate(createdAt)}</h1>
            <h1 className="text-2xl">&#x2022;</h1>
            <h1>{typeof author === 'object' ? author.firstName + ` ` + author.lastName : ``}</h1>
          </div>
        </div>
        {typeof mainImage == 'object' ? (
          <div className="bg-slate-100">
            <img
              className="w-full h-[28rem] object-cover rounded-sm"
              src={mainImage?.url || ''}
              alt={mainImage?.alt || ''}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      {post && (
        <div
          className="lexical"
          dangerouslySetInnerHTML={{ __html: contentHTML ? contentHTML : `` }}
        ></div>
      )}
    </div>
  )
}

export default PostClient
