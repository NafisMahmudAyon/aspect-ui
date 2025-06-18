import { MongoClient, ServerApiVersion } from 'mongodb'
import { NextResponse } from 'next/server'

const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// Helper to get DB and collection
async function getCollection() {
  await client.connect()
  const db = client.db('aspect-ui') // Replace with your DB name if different
  return db.collection('profiles')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, clerkID, apiKey } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await client.connect()
    const db = client.db('aspect-ui') // You can change this to your actual DB name
    const collection = db.collection('profiles')

    const newProfile = {
      name,
      email,
      clerkID,
      apiKey,
      createdAt: new Date()
    }

    const result = await collection.insertOne(newProfile)

    return NextResponse.json(
      { message: 'Profile created', id: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating profile:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// GET /api/profiles?username=your_username — Fetch profile
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const clerkID = searchParams.get('clerkID')

    if (!clerkID) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      )
    }

    const collection = await getCollection()
    const profile = await collection.findOne({ clerkID })

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/profiles?username=your_username — Update profile
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      )
    }

    const updates = await request.json()
    const collection = await getCollection()

    const result = await collection.updateOne(
      { username },
      { $set: { ...updates, updatedAt: new Date() } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Profile updated' })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/profiles?username=your_username — Delete profile
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      )
    }

    const collection = await getCollection()
    const result = await collection.deleteOne({ username })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Profile deleted' })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
