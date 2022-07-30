import jwt from 'jsonwebtoken';
import { v4 as uuid } from "uuid";

const expireIn = '1hr';
const SECRET_KEY= "3b421d2a104af29d1cd7e90f28971eca237c0b45138fe0668adb7ff108c0f3fa9cb71b2bd63ff24b36b4d48431f4ee1be75878ac6b889aae6b5e3ae9b0607093";
const userId = 1;
const userdb =  [
        {
            "id":userId ,
            "fname":"test1",
            "email": "test@gmail.com",
            "password": "123456"
        }
    ]

const createToken = (payload)=>{
  return jwt.sign(payload,SECRET_KEY,{expiresIn: expireIn});
}
//for checking register or not
const isAuthentication = ({ fname, email, password})=>{
    return (
        userdb.findIndex(
          (user) => user.fname === fname && user.email === email && user.password === password
        ) !== -1
      );
}

const isLogAuthentication = ({  email, password})=>{
    return (
        userdb.findIndex(
          (user) => user.email === email && user.password === password
        ) !== -1
      );
}


//registration 
export const getSignupDetails = (req,res)=>{
    const { fname, email, password} = req.body;
    if(isAuthentication({ fname, email, password})){
       const status = 401;
       const message = "Email is already existed";
       res.send({status,message}).json({ status, message});
       return;
    }
    const status = 200;
    const message = "Data Added Successfully";
    let lastItemId = userdb[userdb.length -1].id;
    console.log(lastItemId);
    userdb.push({id:lastItemId+1, fname:fname, email:email,password:password});
    const accessToken = createToken({ email, password});
    res.send({status,message}).json({status,message, accessToken});
}


//for checking whether data is stored or not
export const getuserDetails = (req,res)=>{
    res.send(userdb);
}

export const validateLoginDetails = (req, res)=>{
    
    const { email, password } = req.body;

   if (isLogAuthentication({email, password})) {
      const status = 200;
      const message = "Logged In Successfully ";
      const accessToken = createToken({ email, password});
      res.send({status,message}).json({status,message,accessToken});
      return;
   } else {
      const status = 402;
      const message = "Invalid Email or Password";
      res.send({status, message}).json({status, message});
      return;
   }
}


// USM Function
let Users = [];

export const createUser = (req, res)=>{
   const user = req.body;

   Users.push({...user,id: uuid() });
   res.send("Data addded Successfully");
}

export const getUser = (req, res)=>{
   res.send(Users);
}

export const getSingleUser= (req, res)=>{
  const singleUser = Users.filter((user)=> user.id === req.params.id);
  console.log(singleUser);
  res.send(singleUser);
}

export const deleteUsers = (req, res)=>{
  Users = Users.filter((user)=> user.id !== req.params.id);
  res.send("Data deleted Successfully");
}

export const updateUsers = (req, res)=>{
  const upUser = Users.find((user)=> user.id === req.params.id);

  upUser.name = req.body.name;
  upUser.email = req.body.email;
  upUser.contact = req.body.contact;

  res.send("Update data Successfully");
}