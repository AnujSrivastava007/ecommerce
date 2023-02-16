const express = require("express");
const UserModel = require("../models/UserModel");
const {hashPassword} = require('../helpers/AuthHelper');

const router = express.Router();

// routes - Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if(!name || !email || !password || !phone || !address){
        res.send({error:'This Feild is Required'});
    }
    const existinguser = await UserModel.findOne({email});
    if(existinguser){
        res.status(200).send({
            success:true,
            message:'Already Registered Please Login' 
        })
    }
    
    const hashedPassword = await hashPassword(password);
    const user = new UserModel({name,email,phone,address,password:hashedPassword});
    await user.save();

    res.status(201).send({
        success:true,
        message:'User Registered Successfully',
        user:user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
});

module.exports = router;
