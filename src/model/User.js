const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/videoHostingSite", {useNewUrlParser: true, useUnifiedTopology: true});

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

module.exports = mongoose.model('Users', userSchema)