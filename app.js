import express from "express";
import cors from "cors";
import sharp from "sharp";
import path from "path";
import mongoose from "mongoose";

import connecttodB from "./connectToDb/index.js";
import dotenv from "dotenv";
import { storage, multer } from "./middleware/multerConfig.js";
import FaceData from "./model/facedB.js";
import Beard from "./model/beardModel.js";
import Glass from "./model/glassModel.js";
import Hair from "./model/hairModel.js";
//route import
import home from "./router/home.js";
import { beardrouter, glassrouter, hairrouter } from "./router/enter.js";
import getstyle from "./router/getstyle.js";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use(express.static("./storage"));

app.use("/", home);
app.use("/enter", hairrouter);
app.use("/enter", glassrouter);
app.use("/enter", beardrouter);

app.use("/api", getstyle);

// app.post("/enter/face", upload.single("image"), async (req, res) => {
//   const { faceshape, gender } = req.body;
//   const image = req.file.filename;

//   console.log(req.body);
//   console.log(req.file.filename);

//   await FaceData.create({
//     faceshape,
//     gender,
//     image,
//   });

//   res.status(200).json({
//     message: "okay done",
//   });
// });

// app.post("/enter/glass", upload.single("image"), async (req, res) => {
//   const { faceshape, gender, glassstyle, description } = req.body;
//   const image = req.file.filename;

//   console.log(req.body);

//   await Glass.create({
//     faceshape,
//     gender,
//     image,
//     glassstyle,
//     description,
//   });

//   res.status(200).json({
//     message: "glass  done",
//   });
// });

// app.get("/api/users", async (req, res) => {
//   const { faceshape, gender } = req.query;
//   console.log(req.query);

//   let query = {};
//   if (faceshape) {
//     query.faceshape = faceshape;
//   }
//   if (gender) {
//     query.gender = gender;
//   }

//   const filteredBread = await Beard.find(query);
//   const filteredGlass = await Glass.find(query);
//   const filteredHair = await Hair.find(query);

//   const breadlength = filteredBread.length;
//   const glasslength = filteredGlass.length;
//   const hairlength = filteredHair.length;
//   const totalLength = breadlength + glasslength + hairlength;

//   res.status(200).json({
//     totalLength,
//     breadlength,
//     filteredBread,
//     glasslength,
//     filteredGlass,
//     hairlength,
//     filteredHair,
//   });
// });

// app.get("/api/users/:id", async (req, res) => {
//   const id = req.params.id;
//   const { box } = req.query;
//   console.log(box);

//   if (box === "beard") {
//     const data = await Beard.findById(id);
//     console.log(data);
//     res.status(200).json(data);
//   }
//   if (box === "glass") {
//     const data = await Glass.findById(id);
//     console.log(data);
//     res.status(200).json(data);
//   }
//   if (box === "hair") {
//     const data = await Hair.findById(id);
//     console.log(data);
//     res.status(200).json(data);
//   }
// });

app.listen(port, async () => {
  console.log(`server is running on port ${port}`);
   try {
      await mongoose.connect(process.env.mongodb_url);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error connecting to MongoDB");
    }
 
});
