function Quadrado(base, altura){
    this.base = base
    this.altura = altura
    let cor = 'red' //  Atributo encapsulado
    this.getCor = () => { return cor}
  }

  const quadrado = new Quadrado(3,4)
  quadrado.cor = 'blue' // Criou um novo atributo para o objeto
  console.log(quadrado.cor)


  function createQuadrado(base, altura){

    let cor = 'blue'
  
    return {
      base,
      altura,
      getCor : function() { return cor } //Busca o atributo encapsulado
    }
  
  }
  
  const quadrado2 = createQuadrado(3,4)
  console.log(quadrado2)
  //{ base: 3, altura: 4, getCor: [Function: getCor] }
  console.log(quadrado2.cor)
  //undefined
  quadrado2.cor = 'red'
  console.log(quadrado2.cor)
  //red
  console.log(quadrado2.getCor())
  //blue