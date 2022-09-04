const Video = require('../model/Video')

exports.getAllVideo = async function(req, res){
    Video.find({}, function(err, videos) {
        res.send(videos);
     });
}

exports.uploadVideo = async function (req, res){
    new Video({
        title: req.body.title,
        description: req.body.description,
        path: "videos\\"+req.file.filename,
        email: req.body.mail,
      }).save().then(doc => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify(
            { 
                status: "success",
                message: "Video upload completed"
            }));
      })
}