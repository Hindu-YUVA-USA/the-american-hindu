import type { Footer } from "@/app/(payload)/payload-types";
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/app/(payload)/payload.config'
import { NextResponse } from "next/server";


export const fetchFooter= async ()  =>{
    if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');
    try {
        const payload = await getPayloadHMR({config: configPromise})
        const footer = await payload.findGlobal({
            slug: 'footer',
            depth: 1,
        })
        if(footer){
            return NextResponse.json(footer, {status: 200});
        }
        return NextResponse.json({error: 'Product not found'}, {status: 404})
    } catch (error) {
        throw new Error("Error fetching footer")
    }
}
