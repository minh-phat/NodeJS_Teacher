
///// -------------------Database
const mongoose = require('mongoose');
////// - Model
const Product = require("../model/Product");

const accUN = "minhphat";
const accPW = "060802";
const dnsServer = "cluster0.pmi9h7n.mongodb.net";
const dbName = "Database1";

const uri = "mongodb+srv://"
+ accUN + ":" + accPW
+ "@" + dnsServer + "/" + dbName + "?retryWrites=true&w=majority";

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
 });

 const db = mongoose.connection;


newRecord = new Product( {
    ProductCode: "QM-0713",
    ProductName: "Quat may kich co KO nho",
    Description: "Day la quat may 30w, kich co 50cms", 
    ImageLink: "https://www.google.com/aclk?sa=l&ai=DChcSEwi18_aKwcj6AhXommYCHeAsDLYYABAFGgJzbQ&sig=AOD64_1k0xf9zsEontnjX_xO5kR369e9qQ&adurl&ctype=5&ved=2ahUKEwi4xOuKwcj6AhV1mdgFHYXUB38Qvhd6BAgBEFQ",
    Price: 579000,
    Available: 3000,
});



newRecord.save(
    (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data: ", doc);
        }

    });