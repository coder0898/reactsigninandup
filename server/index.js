import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import useRouter from "./route/route.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/",useRouter);

app.get("/",(req,res)=>{
  res.send("express server is working");
});

app.listen(port , ()=> console.log(`Server is listening at port ${port}`));