const CART_FIELDS = `
id
user {
  id
}
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

export const CART = `
  query Cart {
    Carts {
      docs {
        ${CART_FIELDS}
      }
    }
  }
`

export const CART_BY_USER = `
  query Cart($user: JSON) {
    Carts (where: { user: { equals: $user }}){
      docs {
        ${CART_FIELDS}
      }
    }
  }
`

// export const ORDER = `
// query Order($id: String) {
//   Orders(where: {id: {equals: $id}}, limit: 1){
//     docs{
//       ${CART_FIELDS}
//       user {
//         firstName
//         lastName

//       }
//     }
//   }
// }
// `
