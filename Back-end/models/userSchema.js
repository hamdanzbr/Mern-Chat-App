import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profile:{
        type:String,
        default:"",
    },
    // createdAt,updatedAt , member since createdAt
},{timestamps:true});

const User=mongoose.model("Users",userSchema)

export default User;