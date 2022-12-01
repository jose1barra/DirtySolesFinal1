import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    email: {
        type: String,
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
  }
);


//signup method
UserSchema.statics.signup = async function(email, password){

  //validating 
  if (!email || !password){
    throw Error('All fields must be filled!')
  }

  if (!validator.isEmail(email)){
    throw Error('Invalid Email!')
  }

  if (!validator.isStrongPassword(password)){
    throw Error('Stronger Password is needed!')
  }



  const exists = await this.findOne({email}); 

  if (exists) {
    throw Error('Email already exists')
  }

  const salt = await bcrypt.genSalt(10); 
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({email, password: hash});

  return user;
}

//login method
UserSchema.statics.login = async function (email, password) {

  if (!email || !password){
    throw Error('All fields must be filled!');
  }

  const user = await this.findOne({email});

  if (!user) {
    throw Error('Incorrect Email');
  }

  const matching = await bcrypt.compare(password, user.password);

  if (!matching) {
    throw Error('Incorrect Password');
  }

  return user;


}

export const User = mongoose.model("User", UserSchema);