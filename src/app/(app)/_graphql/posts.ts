export const POSTS = `
query Post{
  Posts{
    docs{
      slug
      title
      mainImage {
        url
        alt
      }
      createdAt
      contentHTML
      content
      tags{
        id
        name
      }
      author{
        firstName
        lastName
      }
    }
  }
}
`

export const POST = `
query Post($slug: String){
  Posts(where: {slug: {equals: $slug}}, limit: 1){
    docs{
      title
      createdAt
      author{
        firstName
        lastName
      }
      mainImage {
        url
        alt
      }
      contentHTML
      tags{
        id
        name
      }
      
    }
  }
}
`
