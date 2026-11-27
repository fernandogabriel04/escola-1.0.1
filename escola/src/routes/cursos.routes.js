import { Router } from "express";
import { CursosController } from "../controllers/cursos.controller.js";
import { validarCurso } from "../middlewares/validacao.middleware.js";

const router = Router();
const cursosController = new CursosController();

router.get("/", cursosController.listarCursos.bind(cursosController));

router.get("/:id", cursosController.buscarCursoPorId.bind(cursosController));

router.post("/", validarCurso, cursosController.criarCurso.bind(cursosController));

router.put("/:id", validarCurso, cursosController.atualizarCurso.bind(cursosController));

export { router as cursosRouter };