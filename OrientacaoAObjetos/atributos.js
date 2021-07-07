const Quadrado = {
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Informação não númerica"
        this.base = base
        this.altura = altura

    }
}


const quadrado = new Quadrado('11', 'doze')
console.log(quadrado)