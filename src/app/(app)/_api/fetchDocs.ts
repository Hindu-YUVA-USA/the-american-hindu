import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/app/(payload)/payload.config'
import { CollectionSlug } from 'payload';
import {Config} from "@/app/(payload)/payload-types"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { payloadToken } from "./token";

import { ORDERS } from "../_graphql/orders";
import { PRODUCTS } from "../_graphql/products";
import { POSTS } from '../_graphql/posts';

type queryMapProps = {
    [s: string]: {
        key: string,
        query: string
    }
}
const queryMap: queryMapProps = {
    orders: {
        key: 'Orders',
        query: ORDERS
    },
    products:{
        key: 'Products',
        query: PRODUCTS
    },
    posts: {
        key: 'Posts',
        query: POSTS
    }
  }


type fetchDocsArgs = {
    collection: keyof Config['collections']
    draft?: boolean
}
export const fetchDocs = async <T>(args: fetchDocsArgs) => {
    if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');
    const { collection, draft} = args || {}

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
        return res?.data?.[queryMap[collection].key]?.docs
    });
    return doc
}

export const fetchFooter= async (slug: CollectionSlug) =>{
    if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');
    try {
        const payload = await getPayloadHMR({config: configPromise})
        const docs = await payload.find({
            collection: slug,
            depth: 1,
        })
        return docs;
    } catch (error) {
        throw new Error("Error fetching footer")
    }
}

