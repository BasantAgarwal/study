const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb+srv://admin:4t1w7p0iARTvjOAP@cluster0.w29io.mongodb.net/StudyNotionDB", {})
    .then( () => console.log("DATABASE CONNECTED SUCESSFULLY !! "))
    .catch( (error) => {
        console.log("ERROR FACED IN DATABASE CONNECTION !!");
        console.error(error);
        process.exit(1);
    })
}; 