import {cursos as sementeCursos} from "../dados/cursos.js";

export class CursosRepository {
    constructor() {
        this.cursos = [...sementeCursos];
        this.proximoId = this.cursos.reduce((m, c)=>Math.max(m, c.id), 0) + 1;
    }
    async listarTodos(){
        return this.cursos;
    }
    async buscarPorId(id){
        return this.cursos.find(c => c.id === id) ?? null;
    }
    async buscarPorNome(nome){
        const alvo = nome.trim().toLowerCase();
        return this.cursos.filter(c => c.nome.toLowerCase().includes(alvo));
    }
    async criar(curso){
        const novo = {
            id: this.proximoId++,
            ...curso
        };
        this.cursos.push(novo);
        return novo;
    }
    async atualizar(id, dados){
        const curso = await this.buscarPorId(id);
        if(!curso){
            throw new Error("Curso não encontrado");
        }
        Object.assign(curso, dados);
        return curso;
    }
}