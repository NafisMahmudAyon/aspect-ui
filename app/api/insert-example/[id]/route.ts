import { MongoClient, ServerApiVersion } from 'mongodb'
import { NextRequest } from 'next/server'

const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const body = await req.json()

    if (!id || !body) {
      return new Response(
        JSON.stringify({ error: 'Missing id or update data' }),
        {
          status: 400
        }
      )
    }

    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    const result = await collection.updateOne({ id }, { $set: body })

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Document not found' }), {
        status: 404
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200
    })
  } catch (error) {
    console.error('Update failed:', error)
    return new Response(JSON.stringify({ error: 'Update failed' }), {
      status: 500
    })
  } finally {
    await client.close()
  }
}
