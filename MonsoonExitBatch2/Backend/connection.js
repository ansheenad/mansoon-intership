const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://ansheenadp:anshi123@cluster0.c0mufif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
