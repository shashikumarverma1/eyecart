import mongoose from "mongoose"
const UserModal=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
       // unique:true
    },
 
    timestamp:{
        type:String,
        require:true
    },
   
})
//modal
export const User=mongoose.model("User",UserModal)