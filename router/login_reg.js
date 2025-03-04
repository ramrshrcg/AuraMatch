import express from "express"
import {loginController, registerController } from "../controller/loginController.js"
const router = express.Router()



const login=router.post("/login", loginController)
const register= router.post("/register",registerController )
export {login, register}