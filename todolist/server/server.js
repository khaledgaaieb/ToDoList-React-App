const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express( )
app.use(express.json())

//used port
const port = process.env.PORT || 8080;

//routes import
const TodoItemRoute = require('./routes/todoitems')


//MongoDB connection 
mongoose.connect(
    process.env.DB_CONNECT)
.then(()=>{console.log("DataBase connected.");})
.catch(err=>{console.log(err);})


app.use("/",TodoItemRoute)

app.listen(port,()=>{console.log("server connected !");})