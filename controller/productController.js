const  express = require("express");
const  router = express.Router();
const fs = require("fs");

////// - Model
const Product = require("../model/Product");

//-------------------------------------------
router.get( "/" , productHome);
async function productHome(yeucau, trave) {
    try {
        let dssp = await Product.find({});
        console.log(dssp);
        trave.render("products", {CacSanPham: dssp});
    } catch (error) {
        console.log(error);
    }
}

router.get( "/create" , (yeucau, trave) => {
    trave.render("insertProduct");
});

router.post( "/create" , (yeucau, trave) => {
    console.log("\n BODY: ", yeucau.body);
    console.log("\n Params: ", yeucau.params);
    console.log("\n Query: ", yeucau.query);
    trave.render("oneproduct");
});

router.get( "/giadung" , (yeucau, trave) => {
    pageContent = "Hang Gia Dung !!!";
    trave.send(pageContent);
});

router.get( "/maymac" , (yeucau, trave) => {
    pageContent = "Hang May Mac !!!";
    trave.send(pageContent);
});

//-------------------------------------------
exports.ProductRouter = router;