const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors({
    origin: '*'
}));
var formidable = require('formidable'); 

exports.uploadVideo = async function (req, res){
    console.log(res.body)
}