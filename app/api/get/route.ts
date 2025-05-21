import { MongoClient, ServerApiVersion } from 'mongodb'
import { NextRequest } from 'next/server'

const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const catsParam = searchParams.get('cats')
    const subcatsParam = searchParams.get('subcats')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const cats = catsParam ? catsParam.split(',') : []
    const subcats = subcatsParam ? subcatsParam.split(',') : []

    const filter: any = {}

    if (cats.length === 1) {
      filter.categories = { $in: cats }
    } else if (cats.length > 1) {
      filter.categories = { $all: cats }
    }

    if (subcats.length === 1) {
      filter.subCategories = { $in: subcats }
    } else if (subcats.length > 1) {
      filter.subCategories = { $all: subcats }
    }

    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    const total = await collection.countDocuments(filter)
    const result = await collection
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    return new Response(
      JSON.stringify({
        success: true,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        data: result
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Fetch error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
