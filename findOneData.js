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
  
    db.db("Database1").collection("Table1").findOne( {} , 
        (err2, results) => {
            if (err2) {
                console.log("Error: ", err2);
            } else {
                console.log("FIND one DATA !!!", results);
                db.close();
            }
            process.exit(1);
        }
    );
  

});