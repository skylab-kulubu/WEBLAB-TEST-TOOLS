const errorHandler = require("./middlewares/errorHandler");
const productRoute = require("./routes/productRoute");

const express = require("express");
const app = express();
const cors = require("cors");



//JSON CONVERTER
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/v1/products",productRoute);


//ERROR HANDLER
app.use(errorHandler);

module.exports = app;