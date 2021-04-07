import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.get("/", bodyParser.json(), async(req:express.Request,res:express.Response)=>{
  return res.send("wellcome!")
  
});

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
