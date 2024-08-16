const ORDER_FIELDS = `
id
orderTotal
items {
  product {
    id
    title
    blurb
    price
    image {
      id
      attachment {
        id
        alt
        url
      }
    }
    slug
  }
  quantity
  subtotal
}
createdAt
`

export const ORDERS = `
  query Order {
    Orders {
      docs {
        ${ORDER_FIELDS}
      }
    }
  }
`

export const ORERS_BY_USER = `
  query Order($user: JSON) {
    Orders (where: { user: { equals: $user }}){
      docs {
        ${ORDER_FIELDS}
      }
    }
  }
`

export const ORDER = `
query Order($id: String) {
  Orders(where: {id: {equals: $id}}, limit: 1){
    docs{
      ${ORDER_FIELDS}
      user {
        firstName
        lastName
        
      }
    }
  }
}
`
