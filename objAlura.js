const user = {
    nome: "Julia",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

// const exibir = () => {
//     console.log(this.nome);
// };
const exibir = function(){
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);
exibirNome()