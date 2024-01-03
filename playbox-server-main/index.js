const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

// Import express from nodejs 
const express = require('express');
// Creating an instance of the express application
const app = express();


// Middleware
const cors = require('cors');
const corsConfig = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

app.use(express.json());



// Connect to MongoDB Database


const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASS}@cluster0.10dhryt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const database = client.db('toysDB');
    const toysCollection = database.collection('toysCollection');
    // Fetch all toys from the database
    app.get('/all', async (req, res) => {
      const result = await toysCollection.find({}).toArray();
      res.send(result);
    })

    // Fetch all categorywise toys from the database
    app.get('/all/:category', async (req, res) => {
      if (req.params.category == 'Pokemon' ||
        req.params.category == 'Lego Juniors' ||
        req.params.category == 'Kirby' ||
        req.params.category == 'Super Mario' ||
        req.params.category == 'The Legend of Zelda' ||
        req.params.category == 'Paw Patrol') {
        const result = await toysCollection.find({ category: req.params.category }).toArray();
        res.send(result);
      }
      else{
      const result = await toysCollection.find({}).toArray();
      res.send(result);
    }
    })

    app.get('/toy/:id', async(req, res) =>{
      const id = req.params.id;
      console.log(id);
      const query = {_id: new ObjectId(id)};
      const result = await toysCollection.findOne(query);
      res.send(result);
    })

    // Fetch toy posted by logged in user
    app.get('/mytoys/:email', async(req, res)=>{
      console.log(req.params.id);
      const result = await toysCollection.find({email :req.params.email}).sort({price: 1}).collation({locale:'en_US', numericOrdering: true }).toArray();
      res.send(result);
    })

    // Creating index
    // const indexKeys = {toyname: 1,category: 1};
    // const indexOptions = {name: 'toyCategory'};
    // const result = await toysCollection.createIndex(indexKeys, indexOptions);

    app.get('/toySearchByCategory/:text', async(req, res)=>{
      const searchText = req.params.text;
      const result = await toysCollection.find({
        $or: [
          { toyname: { $regex: searchText, $options: "i"}},
          {category: {$regex: searchText, $options: "i"}}
        ],
      }).toArray();
      res.send(result);
    })

    // Post a toy
    app.post('/addtoy', async (req, res) => {
      const body = req.body;
      const result = await toysCollection.insertOne(body);
      res.send(result);
      if(result.deletedCount === 1){
        console.log("Delete Successful.");
      }
      else{
        console.log("Couldn't Delete Item.");
      }
    })

    // Update Toy
    app.put('/update/:id', async(req, res)=>{
      const id = req.params.id;
      const body = req.body;
      const filter = {_id: new ObjectId(id)}
      const updateToy = {
        $set: {
          price: body.price,
          quantity: body.quantity,
          description: body.description,
          

        }
       };
        const result = await toysCollection.updateOne(filter, updateToy);
        res.send(result);
     

    })

    // Delete
    app.delete('/delete/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await toysCollection.deleteOne(query);
      res.send(result)
    })

    




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



// Defines port in which the server is to be launched
// During deployment it will assign any of the available ports to our server.
const port = process.env.PORT || 5000;

// Defining a URL and the response the users will get when they go to that url.
app.get('/', (req, res) => {
  res.send('Playbox Server is Running!');
})

// Set the port at which the server should listen for incoming requests
app.listen(port, () => {
  console.log(`Playbox server is running on port ${port}`);
})