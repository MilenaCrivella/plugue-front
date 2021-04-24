export class Aluno {
    id!: Number
    nome!: String
    curso!: String
    contato!: String
    senha!: String

    constructor(json?: Aluno) {
        Object.assign(this, json)
    }
}
