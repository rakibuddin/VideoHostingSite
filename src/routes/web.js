const { authUser, authRole } = require('../middlewares/auth')
const UserController = require('../controller/UserController')
const Video = require('../model/Video')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var formidable = require('formidable'); 
var fs = require('fs');
const fileUpload = require("express-fileupload");



module.exports = function(app){
  const bodyParser = require('body-parser');
  const cors = require('cors')
  app.use(bodyParser.json());
  app.use(cors({
    origin: '*'
  }));

  app.get("/", function(req, res){
    res.send("Home");
  });

  //User
  app.post("/register", function(req, res){
    UserController.submitRegistration(req, res);
  });
  
  app.post("/login", function(req, res){
    UserController.authenticate(req, res);
  });

  //Admin specific
  app.get("admin/getAllUser", authUser, authRole('Admin'), function(req, res){
    res.send("home e asi");
  });


  //Video Related Routes
  app.post("/uploadVideo", upload.single('filename'), function (req, res, next) {
    var form = new formidable.IncomingForm();
    var newpath;
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      newpath = __dirname + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
      });
      res.status(200).send("Hi");
    });
    new Video({
      title: req.body.title,
      description: req.body.description,
      path: form.path,
      user_id: user_id,
    }).save().then(doc => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).end(JSON.stringify(
          { 
              status: "success",
              message: "Video upload completed"
          }));
  })
  });

  app.patch("/updateVideo", function(req, res){
    res.send("");
  });
  app.get("/getVideo", function(req, res){
    res.send("");
  });
  app.get("/deleteVideo", function(req, res){
    res.send("");
  });

  //Admin specific
  app.get("/getVideoByUser", authUser, authRole('Admin'), function(req, res){
    res.send("");
  }); 

}