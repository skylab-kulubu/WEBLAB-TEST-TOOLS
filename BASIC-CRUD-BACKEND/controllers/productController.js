const asyncWrapper = require("../middlewares/async");
const Product = require("../models/productModel");
const {createCustomError} = require("../error/custom-error.js");

const newProduct = (asyncWrapper(async (req,res,next) => {
    const newOne = await Product.create(req.body);
    if(!newOne) {
        return next(createCustomError("An error occured while creating a product",400))
    };
    res.status(201).json({status:"success",data:{product:newOne}})
} ));

const getAllProducts = (asyncWrapper (async (req,res,next)=>{
    const products = await Product.find();
    if(!products) {
        return next(createCustomError("An error occured while finding the products",404));
    }
    res.status(200).json({status:"success",data:{products}});
}));

const getProductById = (asyncWrapper (async (req,res,next) => {
    const product = await Product.findOne({product:req.params.product});
    if(!product) {
        return next(createCustomError("An error occured while finding the product"),400);
    }
    res.status(200).json({status:"success",data:{product}});
} ));

const updateProduct = (asyncWrapper (async (req,res,next) => {
    const updated = await Product.updateOne({product:req.params.product},req.body);
    if(!updated) {
        return next(createCustomError("An error occured while changing the product"),400);
    }
    res.status(204).json({status:"success"});
}))

const deleteProduct = (asyncWrapper (async (req,res,next)=>{
    const deleted = await Product.deleteOne({product:req.params.product});
    if(!deleted) {
        return next(createCustomError("An error occured while deleting the products with that id"),400);
    }
    res.status(204).json({status:"success"});
}))

module.exports = {newProduct,getAllProducts,getProductById,deleteProduct,updateProduct};