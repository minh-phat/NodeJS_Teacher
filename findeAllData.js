const { MongoClient, ServerApiVersion } = require('mongodb');

const accUN = "minhphat"; //account username to connect database
const accPW = "060802"; //account password to connect database
const dnsServer = "cluster0.pmi9h7n.mongodb.net"; //link to database

const url = "mongodb+srv://" // avalable link of mongodb
+ accUN + ":" + accPW
+ "@" + dnsServer + "/?retryWrites=true&w=majority";


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Database1");
        dbo.collection("Table1").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          });
      });

// toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();