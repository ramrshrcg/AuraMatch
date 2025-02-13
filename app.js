import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { storage, multer } from "./middleware/multerConfig.js";
import bodyParser from "body-parser";

//route import
import home from "./router/home.js";
import { beardrouter, glassrouter, hairrouter } from "./router/enter.js";
import getstyle from "./router/getstyle.js";
import { login, register } from "./router/login_reg.js";

//use 
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
const upload = multer({ storage: storage });
//package use
app.use(express.json());
app.use(cors());
app.use(express.static("./storage"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.use("/", home);
app.use("/enter", hairrouter);
app.use("/enter", glassrouter);
app.use("/enter", beardrouter);

app.use("/api", getstyle);

app.use("/user", login)
app.use("/user", register)


//server 
app.listen(port, async () => {
  console.log(`server is running on port ${port}`);
   try {
      await mongoose.connect(process.env.mongodb_url);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error connecting to MongoDB");
    }
 
});
