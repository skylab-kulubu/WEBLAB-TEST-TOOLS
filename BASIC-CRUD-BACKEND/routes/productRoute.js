const express = require("express");
const router = express.Router();

//CONTROLLER IMPORTS
const productController = require("../controllers/productController");
//----

router.route("/newProduct").post(productController.newProduct);
router.route("/allProducts").get(productController.getAllProducts);
router.route("/:product").get(productController.getProductById);
router.route("/:product").patch(productController.updateProduct);
router.route("/:product").delete(productController.deleteProduct);

module.exports = router;