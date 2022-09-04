const { authUser, authRole } = require('../middlewares/auth')
const UserController = require('../controller/UserController')
const VideoController = require('../controller/VideoController')
const Video = require('../model/Video')


//multer config
const multer  = require('multer')
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/videos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+"--"+file.originalname);
  } 
})
const upload = multer({ storage: fileStorageEngine })



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
  app.get("/getAllVideo", function (req, res) {
    VideoController.getAllVideo(req, res);
  });

  app.post("/uploadVideo", upload.single("filename"), function (req, res) {
    VideoController.uploadVideo(req, res);
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