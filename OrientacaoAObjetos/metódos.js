class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números"
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
    calcularArea() {
        return this.base * this.altura
    }
    duplicaBase(){
        this.base = 2* this.base
    }
    imprimir(){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`
      }
}

const quadrado = new Quadrado(3, 4)
console.log(quadrado);
console.log(quadrado.calcularArea())
console.log(quadrado.duplicaBase())
console.log(quadrado.calcularArea())
console.log(quadrado.imprimir())