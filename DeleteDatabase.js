const { MongoClient, ServerApiVersion } = require('mongodb');

const accUN = "minhphat"; //account username to connect database
const accPW = "060802"; //account password to connect database
const dnsServer = "cluster0.pmi9h7n.mongodb.net"; //link to database

const uri = "mongodb+srv://" // avalable link of mongodb
+ accUN + ":" + accPW
+ "@" + dnsServer + "/?retryWrites=true&w=majority";

const client = new MongoClient(uri, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    });

const databasename = "Testing"; // Database name
MongoClient.connect(uri).then((client) => {
  
    // Reference of database
    const connect = client.db(databasename);
  
    // Dropping the database
    connect.dropDatabase();
  
    console.log("Dropping successful");
}).catch((err) => {
    console.log(err.Message);
})