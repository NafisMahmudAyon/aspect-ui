
import { MongoClient, ServerApiVersion } from "mongodb"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
// run().catch(console.dir)

export async function insertData(id: string, url: string, codeTsx: string, codeJsx: string, pro: boolean, jsonTsx: string, jsonJsx: string) {
  try {
    await client.connect()
    const db = client.db('aspect-ui-cluster')
    const collection = db.collection('examples')

    if (!db) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      )
    }

    if (!collection) {
      throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
      )
    }

    const result = await collection.insertOne({
      id,
      url: JSON.stringify(url),
      codeTsx: JSON.stringify(codeTsx),
      codeJsx: JSON.stringify(codeJsx),
      pro,
      jsonTsx: JSON.stringify(jsonTsx),
      jsonJsx: JSON.stringify(jsonJsx)
    })
    console.log(result)
  }
  catch (error) {
    console.log(error)
  }
}
