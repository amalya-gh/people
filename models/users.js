const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
  username:{
    type:String,
    minlength:3,
    maxlength:25,
    unique:true
  },
  password:{
    type:String,
    minlength:6,
    maxlength:25
  },
  name:String,
  email:{
    type:String,
    minlength:10,
    maxlength:255,
    unique:true,
    sparse:true
  },
  age:{
    type:Number,
    default:18
  },
  gender:{
     type: String,
     enum: ["Male", "Female"]
   }
})

module.exports = mongoose.model('users', UsersSchema);
