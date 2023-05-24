//creating database
const mongoose = require("mongoose");


// creating a database
mongoose.connect("mongodb://127.0.0.1:27017/LearnTech",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(()=> {
    console.log("connected to database");
}).catch((error)=>{
    console.log(error);
})