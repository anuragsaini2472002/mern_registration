const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;


app.get('/',(req,res)=>{
    res.send("Hello this is registration page");
    console.log("This is registration page")
})

app.listen(PORT, ()=>{
     console.log(`listen in port number ${PORT}`);
})









