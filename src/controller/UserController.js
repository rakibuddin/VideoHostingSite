const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
app.use(express.json());
const UserModel = require('../model/User')

exports.showRegistrationForm = function (req, res){
    console.log('Registration Page dekhate hobe');
};

exports.submitRegistration = async function (req, res){
    try{
        const salt = await bcrypt.genSalt(5);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            role: req.body.role
          })
        .save()
        .then(doc => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(
                { 
                    status: "success",
                    message: "registration is succesful"
                }));
        })
        .catch(err => {
            console.error(err);
            res.send("Bolbo je error hoise");
        })
    }catch(err){
        console.log(err)
    }   
};

exports.authenticate = function (req, res){
    UserModel.find({email: req.query.email}, async function(err, docs){
        if(err){
            console.log(err);
        }else if(docs == null){
            res.status(400).send("User pawa jayni!");
        }else{
            docs = docs[0];
            try{
                if(await bcrypt.compare(req.query.password, docs.password)){
                    res.setHeader('Content-Type', 'application/json');
                    res.status(400).end(JSON.stringify(
                        { 
                            status: "success",
                            user_id: docs._id,
                            email: docs.email,
                            name: docs.name,
                        }));
                }else{
                    res.setHeader('Content-Type', 'application/json');
                    res.status(400).end(JSON.stringify(
                        { 
                            status: "failed",
                            message: "Passowrd Mismatch"
                        }));
                }
            }catch(err){
                res.setHeader('Content-Type', 'application/json');
                res.status(400).end(JSON.stringify(
                    { 
                        status: "failed",
                        message: "Error occured"
                    }));
            }
        }
    });
};