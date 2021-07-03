/* Criar um conversor de Preço de produtos em Dolár para real */

const produtos = [
    {
        nome: "Apple Watch Series 6",
        valor: 319.00

    },
    {
        nome: "Airpods Max",
        valor: 489.99
    },
    {
        nome: "Mackbook M1",
        valor: 899.00
    }
]

let cotacao = 5.06;

const precoEmReais = produtos.map(p => (p.valor*cotacao).toFixed(2));

console.log(precoEmReais);
