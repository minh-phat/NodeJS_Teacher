const  express = require("express");
const  router = express.Router();
const fs = require("fs");

////// - Model
const Product = require("../model/Product");

// Upload - https://www.npmjs.com/package/multer 

const multer = require('multer');
// const upload = multer({dest: 'public/img'});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
const upload = multer({ storage: storage })

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

router.post( "/create" , upload.single("myFile"), (yeucau, trave, ketiep) => {
    console.log("\n BODY: ", yeucau.body);
    console.log("\n Params: ", yeucau.params);
    console.log("\n Query: ", yeucau.query);
    console.log("\n File: ", yeucau.file);

    yeucau.body.ImageLink = "/images/" + yeucau.file.filename;
    oneproduct = new Product(yeucau.body);
    oneproduct.save();
    trave.render("showProduct",  {sanpham: yeucau.body});
});

router.get( "/view/:MaSP" , async (yeucau, trave) => {
    console.log("\n BODY: ", yeucau.body);
    console.log("\n Params: ", yeucau.params);
    console.log("\n Query: ", yeucau.query);

    try {
        let sp = await Product.findOne({ MaSP: yeucau.params.MaSP });
        console.log(sp);
        trave.render("oneproduct", {sanpham: sp});
    } catch (error) {
        console.log(error);
    }

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