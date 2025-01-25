import express from "express";
const router = express.Router();

import glassController from "../controller/glassController.js";
import { storage, multer } from "../middleware/multerConfig.js";

const upload = multer({ storage: storage });

router.get("/glass", upload.single("image"), glassController);
router.get("/beard", upload.single("image"), glassController);

export default router;
