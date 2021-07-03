function escreva(texto){
    console.log(texto);

}

escreva('Primeiro texto');

function soma(a,b){
    return a+b
}
let resultadoSoma = soma(24,78);
escreva(resultadoSoma)

escreva('Função Anônima');

const multiplicar = function(a,b){return a*b;}

let resultadoMultiplicacao = multiplicar(3,5);
escreva(resultadoMultiplicacao)

escreva('Arrow Function')

const dividir = (a,b) => a/b;
let resultadoDivisao = dividir(15,3);
escreva(resultadoDivisao)