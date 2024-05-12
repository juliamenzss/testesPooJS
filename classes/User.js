// class sempre começa com UpperCase
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    //faz o encapsulamento da classe e pega o dado, apnas leitura
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }
    //aceita 1 params
    set nome(novoNome) {
        if (novoNome === ''){
            throw new Error('formato inválido')
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return`${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}

// const novoUser = new User('Julia', 'j@j.com', '2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));