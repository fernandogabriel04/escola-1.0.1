import {Router} from "express";
import {cursosRouter} from "./cursos.routes.js";

const router = Router();
router.use("/cursos", cursosRouter);

export default router;