import express from "express";
import { getUsers, autorizarUsuario } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/autorizar-usuario", autorizarUsuario);



export default router;
