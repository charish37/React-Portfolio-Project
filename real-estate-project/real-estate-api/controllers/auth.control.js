import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async(req,res,next) => {
  // in sign-in page we check either user is available or not
  try{
    const {username, password} = req.body;
    // here checking either username is available in user model
    const validUser = await User.findOne({username});
    if(!validUser) return next(errorHandler(404, 'User Not Found!'));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if(!validPassword) return next(errorHandler(401,' Wrong Credentials!'));
    // create a token with an id of user from mongoDB and hash code using secret key, the token created will be `userdetails.headers.saltedSecretKey`
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
    // the created token will be shared as a cookie to the user
    const {password: pass, ...restUserDetails} = validUser._doc;
    res.cookie('access_token',token, {httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000)}).status(200).json(restUserDetails)

    // if the user is valid we have to create a cookie token to authenticate the user
  } catch(err){
    next(err)
  }
}

export const google = async(req,res,next) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: pass, ...rest} = user._doc;
            res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest)
        } else {
            // string of 36 means it takes 0-9 and a-z
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            // has password with 10 rounds of salts
            const hashedPassword = bcrypt.hashSync(generatePassword,10)
            const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),email: req.body.email,password: hashedPassword,avatar: req.body.photo})
            await newUser.save();
           const token = jwt.sign({id: newUser._id }, process.env.JWT_SECRET);
           const {password: pass, ...rest} = newUser._doc;
           res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }
    } catch(error){
        next(error)
    }
}