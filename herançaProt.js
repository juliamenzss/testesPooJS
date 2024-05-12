const user = {
    nome: "Julia",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Amanda",
    email: "a@a.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!');
    }
}
// Primeiro obj que vai herdar as propriedades e o seundo o obj que vai ceder
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()