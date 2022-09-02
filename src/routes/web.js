const { authUser, authRole } = require('../middlewares/auth')
const UserController = require('../controller/UserController')


module.exports = function(app){
  //Home
  app.get("/", function(req, res){
    res.send("home e asi");
  });

  //User
  app.get("/register", function(req, res){
    UserController.showRegistrationForm(req, res);
  });
  app.post("/register", function(req, res){
    UserController.submitRegistration(req, res);
  });
  
  app.post("/login", function(req, res){
    UserController.authenticate(req, res);
  });

  app.post("/logout", function(req, res){
    res.send("home e asi");
  });
  app.get("/dashboard", authUser, function(req, res){
    res.send("home e asi");
  });

  //Admin specific
  app.get("/admin/dashboard", authUser, authRole('Admin'), function(req, res){
    res.send("home e asi");
  });
  app.get("admin/getAllUser", authUser, authRole('Admin'), function(req, res){
    res.send("home e asi");
  });


  //Video Related Routes
  app.post("/uploadVideo", function(req, res){
    res.send("home e asi");
  });
  app.patch("/updateVideo", function(req, res){
    res.send("home e asi");
  });
  app.get("/getVideo", function(req, res){
    res.send("home e asi");
  });
  app.get("/deleteVideo", function(req, res){
    res.send("home e asi");
  });

  //Admin specific
  app.get("/getVideoByUser", authUser, authRole('Admin'), function(req, res){
    res.send("home e asi");
  }); 

}