
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("gratitude").collection("users");
  // perform actions on the collection object
  client.close();
});
module .exports ={

    isConnected, db.client
}