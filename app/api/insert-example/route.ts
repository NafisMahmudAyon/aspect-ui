import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function GET() {
  try {
    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    const data = await collection.find({}).toArray()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('GET error:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500
    })
  } finally {
    await client.close()
  }
}

async function getLastInsertedId(): Promise<number> {
  const db = client.db('aspect-ui')
  const collection = db.collection<{ id: string }>('examples')

  const lastDoc = await collection
    .find({})
    .sort({ id: -1 }) // sort by id descending
    .limit(1)
    .toArray()

  const lastId = lastDoc[0]?.id ? parseInt(lastDoc[0].id) : 99999

  return lastId
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      title,
      url,
      codeTsx,
      codeJsx,
      pro,
      jsonTsx,
      jsonJsx,
      categories,
      subCategories
    } = body

    await client.connect()
    const db = client.db('aspect-ui')
    const collection = db.collection('examples')

    // Get next auto-increment ID
    const id = (await getLastInsertedId()) + 1

    const result = await collection.insertOne({
      id,
      title,
      url,
      codeTsx,
      codeJsx,
      pro,
      jsonTsx,
      jsonJsx,
      categories,
      subCategories
    })

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId, id }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Insert failed:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Insert failed' }),
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}
