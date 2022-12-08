const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 80;
const SERVER = process.env.SERVER_NAME.replace("<password>",process.env.SERVER_PASSWORD);

const start = async () => {
    try {
        await mongoose.connect(SERVER,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Database connection successfuly made...");
        app.listen(PORT,()=>{console.log("Server has just started succesfuly...")});
    } catch(error) {
        console.log(error);
    }
};

start();
