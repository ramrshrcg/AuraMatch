import express from "express";
const router = express.Router();

import {glassController,beardController, hairController } from "../controller/glassController.js";
import { storage, multer } from "../middleware/multerConfig.js";

const upload = multer({ storage: storage });


const glassrouter=router.get("/glass", upload.single("image"), glassController);
const beardrouter= router.get("/beard", upload.single("image"), beardController);
const hairrouter= router.get("/hair", upload.single("image"), hairController);


export {glassrouter, beardrouter, hairrouter};
