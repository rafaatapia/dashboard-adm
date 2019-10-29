export default class Comprador {
    constructor(
        id,
        login,
        senha,
        email,
        nome,
        telefone,
        cpf,
        nascimento,
        sexo,
        mercados
    ) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.email = email;
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.mercados = mercados;
    }

}