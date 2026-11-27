import {cursosRepository} from "../repositories/cursos.repository.js";

export class CursosService {
    constructor() {
        this.repository = new cursosRepository();
    }
    async listarTodos() {
        return await this.repository.listarTodos();
    }
    async buscarPorId(id) {
        const curso = await this.repository.buscarPorId(id);
        if (!curso) {
            throw new Error("Curso não encontrado");
        }
        return curso;
    }
    async buscarPorNome(nome) {
        return await this.repository.buscarPorNome(nome);
    }
    async criar(curso) {
        const cursoExistente = await this.repository.buscarPorNome(curso.nome);
        if (cursoExistente.length > 0) {
            throw new Error("Curso já existe");
        }
        if (curso.ativo && curso.preco === 0) {
            throw new Error("Curso ativo não pode ter preço zero");
        }
        return await this.repository.criar(curso);
    }
    async atualizar(id, curso) {
        const cursoExistente = await this.repository.buscarPorId(id);
        if (!cursoExistente) {
            throw new Error("Curso não encontrado");
        }
        if (curso.nome && curso.nome !== cursoExistente.nome) {
            const cursoComMesmoNome = await this.repository.buscarPorNome(curso.nome);
            if (cursoComMesmoNome.length > 0) {
                throw new Error("Curso com mesmo nome já existe");
            }
        }
        if (curso.ativo && curso.preco === 0) {
            throw new Error("Curso ativo não pode ter preço zero");
        }
        return await this.repository.atualizar(id, curso);
    }
}