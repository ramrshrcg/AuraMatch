import express from "express";
import cors from "cors";

import mongoose from "mongoose";

import dotenv from "dotenv";
import { storage, multer } from "./middleware/multerConfig.js";

import Beard from "./model/beardModel.js";
import Glass from "./model/glassModel.js";
import Hair from "./model/hairModel.js";

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use(express.static("./storage"));


app.post("/enter/beard", upload.single("image"), async (req, res) => {
  const { faceshape, gender, beardstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Beard.create({
    faceshape,
    gender,
    image,
    beardstyle,
    description,
  });

  res.status(200).json({
    message: "beard  done",
  });
});

app.post("/enter/glass", upload.single("image"), async (req, res) => {
  const { faceshape, gender, glassstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Glass.create({
    faceshape,
    gender,
    image,
    glassstyle,
    description,
  });

  res.status(200).json({
    message: "glass  done",
  });
});

app.post("/enter/hair", upload.single("image"), async (req, res) => {
  const { faceshape, gender, hairstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Hair.create({
    faceshape,
    gender,
    image,
    hairstyle,
    description,
  });

  res.status(200).json({
    message: "hair done",
  });
});

app.get("/all", async (req, res) => {
  const dataglass = await Glass.find();
  const len_glass = dataglass.length;
  const databeard = await Beard.find();
  const len_beard = databeard.length;
  const datahair = await Hair.find();
  const len_hair = datahair.length;

const len_total=len_beard+len_glass+len_hair  
  res.status(200).json({
    message: "this",
    len_total,
    len_glass,
    dataglass,
    len_beard,
    databeard,
    len_hair,
    datahair,
    
  });
});

app.get("/api/users", async (req, res) => {
  const { faceshape, gender } = req.query;
  console.log(req.query);

  const filteredGlass = await Glass.find({ gender, faceshape });
  const filteredBread = await Beard.find({ gender, faceshape });
  const filteredHair = await Hair.find({ gender, faceshape });

  const lengthglass= filteredGlass.length
  const lengthbeard= filteredBread.length
  const lengthhair= filteredHair.length
  const total= lengthglass+lengthbeard+lengthhair

  
  res.status(200).json({
    total,
    lengthbeard,
    filteredBread,
    lengthglass,
    filteredGlass,
    lengthhair,
    filteredHair,
  });
});

app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const { box } = req.query;
  console.log(box);

  if (box === "beard") {
    const data = await Beard.findById(id);
    console.log(data);
    res.status(200).json(data);
  }
  if (box === "glass") {
    const data = await Glass.findById(id);
    console.log(data);
    res.status(200).json(data);
  }
  if (box === "hair") {
    const data = await Hair.findById(id);
    console.log(data);
    res.status(200).json(data);
  }
});

app.listen(port, async () => {
  console.log(`server is running on port ${port}`);
  try{
    await mongoose.connect(process.env.mongodb_url);
    console.log('connect to db');

  }catch(error)
  {
    console.log('not connect to db');
  }
});
