const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
});

app.get('/data',function(req,res){
    Data.find().then((item)=>res.send(item))
})

app.post('/create',function(req,res){
    Data.create(req.body).then((item)=>res.send(item))
})

app.put('/update/:id',function(req,res){
    Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))
})

app.delete('/delete/:id',function(req,res){
    Data.findByIdAndDelete({_id:req.params.id}).then((item)=>res.send(item))
})

app.listen(8080,()=>console.log("Server Started on port number 8080"));

mongoose.connect("mongodb+srv://sdheerkadharshini:sdheerka@cluster0.oxbxqih.mongodb.net/database").then(()=>console.log("MongoDB Connected"))

//create a schema

var newSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})

//model
let Data = mongoose.model('database',newSchema)

//create a data for testing

// let data1 = new Data({
//     name:"Dheerka Dharshini",
//     email:"sdheerkadharshini@gmail.com",
//     password:"sdheerka",
//     amount:2000
// })

// //save the data
// data1.save()