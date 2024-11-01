const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require ('cors')

//middleware
app.use(cors(
 /* {
    origin: ["http://localhost:3000"], // allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // send cookies when making requests
    allowedHeaders: ["Content-Type", "Authorization"] // allow specific headers when making requests
  }*/
));
app.use(express.json());

//uwBbJrFbBcKo7cV9

//mongodbconfiguration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://bookish-mern:uwBbJrFbBcKo7cV9@cluster0.pl37m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();
    //create a collection
    const bookCollection = client.db("BookInventory").collection("books");
    //insrt a book to the db
    app.post("/upload-book",async(req,res) => {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
    })

    //get books from db
    app.get("/all-books", async(req,res)=>{
        const books = bookCollection.find();
        const result = await books.toArray();
        res.send(result);
    });

    //update book data
    app.patch("/book/:id",async(req,res)=>{
        const id = req.params.id;
        //console.log(id);
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id)};

        const updateDoc = {
          $set : {
            ...updateBookData,
          }
        }
        const options = { upsert: true};

        
        const result = await bookCollection.updateOne(filter,updateDoc,options);
        res.send(result);

    });
    //delete book data
    app.delete("/book/:id",async(req,res)=>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)};
        const result = await bookCollection.deleteOne(filter);
        res.send(result);
    })
    app.get("/all-books",async(req,res)=>{
      let query = {};
      if(req.query?.category){
        query = { category: req.query.category};
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    //single books
    app.get("/book/:id",async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollection.findOne(filter);
        res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Bookish app listening on port : ${port}`)
})