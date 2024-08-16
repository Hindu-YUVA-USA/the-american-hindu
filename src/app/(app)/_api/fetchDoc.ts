import {Config} from "@/app/(payload)/payload-types"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { payloadToken } from "./token";

import { ORDER } from "../_graphql/orders";
import { PRODUCT } from "../_graphql/products";
import { POST } from "../_graphql/posts";

type queryMapProps = {
    [s: string]: {
        key: string,
        query: string
    }
}
const queryMap: queryMapProps = {
    orders: {
        key: 'Orders',
        query: ORDER
    },
    products:{
        key: 'Products',
        query: PRODUCT
    },
    posts: {
        key: 'Posts',
        query: POST
    },
    
  }


type fetchDocArgs = {
    collection: keyof Config['collections']
    draft?: boolean
    id?: string
    slug?: string
}
export const fetchDoc = async <T>(args: fetchDocArgs) => {
    if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');
    const { collection, draft, id, slug } = args || {}

    if(!queryMap[collection]) throw new Error(`Collection ${collection} not found`)
    
    let token: RequestCookie | undefined

    if(draft){
        const {cookies} = await import('next/headers');
        token = cookies().get(payloadToken);
    }
    
    const doc: T = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`, {
        body: JSON.stringify({
            query: queryMap[collection].query,
            variables: {
                draft,
                slug,
                id,
            },
        }),
        cache: 'no-store',
        headers:{
            'Content-Type': 'application/json',
            ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {})
        },
        method: 'POST',
    })
    ?.then((res)=> res.json())
    ?.then((res)=> {
        if(res.errors) throw new Error(res?.errors?.[0].message ?? 'Error fetching doc')
        return res?.data?.[queryMap[collection].key]?.docs?.[0]
    });
    return doc
}