
import { MongoClient, ServerApiVersion } from "mongodb"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.NEXT_PUBLIC_clusterurl!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})
