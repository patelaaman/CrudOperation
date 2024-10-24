const  express = require("express");
const   App = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000
const mongoose = require("mongoose")
const bodyparser= require("body-parser")
const cors = require("cors")
const emproute = require("./Routes/stuRoute")
// Body-parser middleware
App.use(bodyparser.urlencoded({ extended: true }))
App.use(bodyparser.json())

App.use(cors());
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DataBase Succesfully Connected");
})


App.use("/emplooye",emproute)


App.listen(port,()=>{
      console.log(`App is Run on Port ${port}`)
})