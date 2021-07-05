class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Matheus', 25)
pessoa1.idade = 24
console.log(pessoa1)