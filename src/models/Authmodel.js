const mongoose = require('mongoose') //import 
const bodyparser = require('body-parser')
const router = require('../../routes/auth')
mongoose.connect('mongodb://localhost/CodeMasters', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema
//creating the user schema
const UserSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique : true},
    password:{type:String, required:true}
}, {timestamps:true}); 

const UserInfo = mongoose.model('User',UserSchema)
module.exports = UserInfo

