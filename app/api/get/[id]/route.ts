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
    const { id } = await params

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

// PATCH method: Update one item by ID
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)
    const updateData = await req.json()

    if (!id || typeof updateData !== 'object') {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing id or update data' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    const result = await collection.updateOne({ id }, { $set: updateData })

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'Document not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Update failed:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Update failed' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } finally {
    await client.close()
  }
}
