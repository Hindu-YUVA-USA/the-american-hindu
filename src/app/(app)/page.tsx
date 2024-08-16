import PostFeed from "@/components/PostFeed"

const Home = () => {
  // let posts: Post[] | null = null

  // const fetchPosts = async () => {
  //   await fetchDocs<Post[]>({ collection: 'posts', draft: true }).then((posts) => {
  //     return posts
  //   })
  //   return posts
  // }
  // try {
  // } catch (error) {}

  // if (posts) {
  //   return (
  //     <main>
  //       {/* <LandingBanner/> */}
  //       <PostFeed posts={posts} />
  //     </main>
  //   )
  // }
  // return notFound()
  return (
      <PostFeed />
  )
}
export default Home
