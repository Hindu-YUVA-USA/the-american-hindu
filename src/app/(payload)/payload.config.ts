// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { stripePlugin } from '@payloadcms/plugin-stripe'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Cart } from './collections/Cart'
import { Comments } from './collections/Comments'
import { Media } from './collections/Media'
import { Orders } from './collections/Orders'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Products } from './collections/Products'
import { Reviews } from './collections/Reviews'
import { Tags } from './collections/Tags'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  localization: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: true,
  },
  globals: [Footer],
  collections: [Users, Media, Products, Orders, Pages, Comments, Tags, Reviews, Posts, Cart],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  maxDepth: 2,
  plugins: [
    // storage-adapter-placeholder
    // stripePlugin({
    //   isTestKey: Boolean(process.env.NEXT_PUBLIC_STRIPE_IS_TEST_KEY),
    //   rest: false,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    //   stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET,
    //   // webhooks: {
    //   //   'price.updated': priceUpsert,
    //   //   'price.created': priceUpsert,
    //   //   'customer.subscription.created': subscriptionUpsert,
    //   //   'customer.subscription.updated': subscriptionUpsert,
    //   //   'customer.subscription.deleted': subscriptionDeleted
    //   // },
    //   // sync: [
    //   //   {
    //   //     collection: COLLECTION_SLUG_PRODUCTS,
    //   //     stripeResourceType: 'products',
    //   //     stripeResourceTypeSingular: 'product',
    //   //     fields: [
    //   //       { fieldPath: 'active', stripeProperty: 'active' },
    //   //       { fieldPath: 'name', stripeProperty: 'name' },
    //   //       { fieldPath: 'description', stripeProperty: 'description' },
    //   //       { fieldPath: 'image', stripeProperty: 'images.0' }
    //   //     ]
    //   //   }
    //   // ]
    // }),
    stripePlugin({
      isTestKey: Boolean(process.env.NEXT_PUBLIC_STRIPE_IS_TEST_KEY) || true,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    }),
  ],
})
