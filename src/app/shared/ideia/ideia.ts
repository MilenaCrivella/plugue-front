import { Aluno } from "../aluno/aluno"


export class Ideia {
    id!: Number
    areaInteresse!: String
    descricao!: String
    titulo!: String
    aluno!: Aluno

    constructor(json?: Ideia) {
        Object.assign(this, json)
    }
}