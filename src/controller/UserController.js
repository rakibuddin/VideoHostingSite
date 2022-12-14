const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
app.use(express.json());
const UserModel = require('../model/User')

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
        })
    }catch(err){
        console.log(err)
    }   
};

exports.authenticate = function (req, res){
    UserModel.find({email: req.body.email}, async function(err, docs){
        if(err){
            console.log(err);
        }else if(docs == null){
            res.status(400).send("User pawa jayni!");
        }else{
            docs = docs[0];
            try{
                if(await bcrypt.compare(req.body.password, docs.password)){
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).end(JSON.stringify(
                        { 
                            status: "success",
                            role: docs.role,
                            email: docs.email,
                            name: docs.name,
                            user_id: docs._id
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
                console.log(err);
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