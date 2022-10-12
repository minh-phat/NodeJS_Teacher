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

client.connect( (err, db) => {
  
    if (err) {
        console.log("Error: ", err);
        process.exit(0);
    }
  
    // if has error is table can be created before . please check table
    db.db("Shop_2022_10").createCollection("customers2",
        (err2, results) => {
            if (err2) {
                console.log("Error: ", err2);
            } else {
                console.log("Created !!!");
                db.close();
            }
            process.exit(1);
        }
    );
  

});