/* Calcular o valor total dos produtos */

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



let cotacao = 5.06

const somaProdutos = (produtos.map(p => p.valor*cotacao).reduce((a,b) =>  a+b,0)).toFixed(2)

console.log(somaProdutos);

