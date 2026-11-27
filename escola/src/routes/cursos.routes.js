import { Router } from "express";
import { CursosController } from "../controllers/cursos.controller.js";
import { validarCurso } from "../middlewares/validacao.middleware.js";

const router = Router();
const cursosController = new CursosController();

router.get("/", cursosController.listarCursos);

router.use("/:id", cursosController.buscarCursoPorId);

router.post("/", validarCurso, cursosController.criarCurso);

router.put("/:id", validarCurso, cursosController.atualizarCurso);

export { router as cursosRouter };