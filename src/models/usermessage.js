// we are defining the schema
const mongoose = require("mongoose");
// after this we are downloading the validator by npm i validator
const validator= new require("validator");
// importing the Schema
// define the Schema
const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },

    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid email id")
            }
        }
    },

     phone: {
        type:Number,
        required:true,
        min:10

    },

    message:{
        type:String,
        required:true,
        minLength:3

    }
})
// we need to create a  collection
const User = new mongoose.model("User",userSchema);

module.exports = User;
