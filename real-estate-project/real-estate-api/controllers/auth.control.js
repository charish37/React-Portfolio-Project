import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async(req,res,next) => {
   try{
    const {username,email,password} = req.body;
    const hashPassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password: hashPassword});
    await newUser.save()
    res.status(201).json("User created successfully")
   } catch(err){
    next(err)
   }
    
}