import express from "express";
import getstyleController from "../controller/getstyleController.js";
const router = express.Router();

router.get("/users", getstyleController);

export default router;
