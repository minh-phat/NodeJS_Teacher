const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductCode: String,
    ProductName: String,
    Description: String,
    ImageLink: String,
    Price: Number,
    Available: Number, 
});

module.exports = mongoose.model("Product", ProductSchema);