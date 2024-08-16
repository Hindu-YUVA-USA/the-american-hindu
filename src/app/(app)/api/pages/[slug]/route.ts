import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/app/(payload)/payload.config'

export const GET = async (request: Request, {params}: {params:{
  slug: string
}}) => {
  try {
    const slug = params.slug;
    const payload = await getPayloadHMR({config: configPromise})

    const data = await payload.find({
      collection: 'pages',
      where:{
        slug:{
          equals: slug
        }
      },
      limit: 1,
      
    })
    if(data.docs.length > 0) return Response.json(data, {status: 200})
      return Response.json({error: "not found"}, {status: 400})
  } catch (error) {
      return Response.json({error}, {status: 400})
  }
}