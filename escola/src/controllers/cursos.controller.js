import { CursosService } from "../services/cursos.services.js";
export class CursosController {
    constructor() {
        this.service = new CursosService();
    }

    async listarCursos(req, res) {
        res.json(await this.service.listarTodos());
    }

    async buscarCursoPorId(req, res) {
        const id = Number(req.params.id);
        const curso = await this.service.buscarPorId(id);
        res.json(curso);
    }

    async criarCurso(req, res) {
        const dados = req.body;
        const novo = await this.service.criar(dados);
        res.status(201).json(novo);
    }

    async atualizarCurso(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        const atualizado = await this.service.atualizar(id, dados);
        res.json(atualizado);
    }
}