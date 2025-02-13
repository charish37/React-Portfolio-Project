import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcrypt'

export const test = (req,res) => {
    res.json({
        message: 'Hello World!'
    })
}

export const updateUser = async(req,res,next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401,"Not authorized to update account"));
    try{
      if(req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }

      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
        }
      }, {new: true}) // new true will update the user with new updated info

      const {password, ...rest} = updatedUser._doc

      res.status(200).json(rest)
    } catch(err){
        next(err)
    }
}

export const deleteUser = async(req,res,next) => {
  if(req.user.id !== req.params.id) return next(errorHandler(401, 'Not authorized to delete account'));
  try{

  } catch(err){
    
  }
}