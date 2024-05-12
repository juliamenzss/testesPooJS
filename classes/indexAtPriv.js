import User from "./User.js";
import Admin from "./herancaClassAdmin.js";
import Docente from "./docente.js";

// const novoUser = new User('Julia', 'j@j.com', '2021-01-01');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Luana', 'l@l.com', '2021-01-01');
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome);
