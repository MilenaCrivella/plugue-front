export class Ideia {
    id!: Number
    areaInteresse!: String
    descricao!: String
    titulo!: String

    constructor(json?: Ideia) {
        Object.assign(this, json)
    }
}