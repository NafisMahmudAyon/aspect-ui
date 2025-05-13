import { MongoClient, ServerApiVersion } from 'mongodb'
import { NextRequest } from 'next/server'

const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing id' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    const result = await collection.findOne({ id: Number(id) })

    if (!result) {
      return new Response(
        JSON.stringify({ success: false, error: 'Not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Fetch failed:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
