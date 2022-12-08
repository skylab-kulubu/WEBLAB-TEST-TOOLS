const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product:{
        type:String,
        unique:true,
        required:true,
        index:true,
    },
    imgURL : {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    barcode:{
        type:Number,
        required:true
    }
});

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;