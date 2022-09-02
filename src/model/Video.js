const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/videoHostingSite", {useNewUrlParser: true, useUnifiedTopology: true});

let videosSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    path: String,
    user_id: Number,
    views: Number
})

module.exports = mongoose.model('Videos', videosSchema)