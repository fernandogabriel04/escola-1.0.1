import { Router } from "express";
import { listarCursos, buscarCursoPorId, criarCurso, atualizarCurso } from "../controllers/cursos.controller.js";
import { validarCurso } from "../middlewares/validacao.middleware.js";

const router = Router();

router.get("/", listarCursos);

router.use("/:id", buscarCursoPorId);

router.post("/", validarCurso, criarCurso);

router.put("/:id", validarCurso, atualizarCurso);

export { router as cursosRouter };