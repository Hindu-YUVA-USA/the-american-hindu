export const PRODUCTS = `
  query Product {
    Products{
      docs {
        id
        title
        blurb
        details
        price
        image{
          attachment{
            id
            url
            alt
          }
        }
      }
    }
}
`

export const PRODUCT = `
query Product($slug: String) {
  Products(where: {slug: {equals: $slug}}, limit: 1){
    docs{
      id
      title
      blurb
      details
      price
      image{
      	attachment{
        	id
					url
        	alt
      	}
  		}
    }
  }
}
`