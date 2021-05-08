const mongoose = require('mongoose') //import 
const bodyparser = require('body-parser')
const router = require('../../routes/auth')
const dbUrl = process.env.DB_URL || 'mongodb://localhost/CodeMasters';
//mongoose.connect(dbUrl , {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
const Schema = mongoose.Schema
//creating the user schema
const UserSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique : true},
    password:{type:String, required:true}
}, {timestamps:true}); 

const UserInfo = mongoose.model('User',UserSchema) //creating the collection with the schema of user
module.exports = UserInfo //exporting the userinfo


