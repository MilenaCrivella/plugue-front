export class Professor {
    id!: Number
    nome!: String
    paginaPessoal!: String
    contato!: String
    senha!: String

    constructor(json?: Professor) {
        Object.assign(this, json)
    }
}
