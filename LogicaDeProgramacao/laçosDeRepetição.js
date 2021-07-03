
console.log('Laço While: ');
let countWhile = 0;

while (countWhile<=100){
    console.log(countWhile)
    countWhile = countWhile + 1;
}


console.log('Laço Do While: ');
let countDoWhile = 0; 
do{
    console.log(countDoWhile);
    countDoWhile++;
}
while(countDoWhile < 100);

console.log('Laço For: ');

for(let i = 0; i < 10; i++){
    console.log(i+1);
}

for(let a = 1; a<=10; a++){
    console.log('Tabuada do: ' + a)
    for(let b = 1; b<=10; b++){
        console.log('número: ' + a + ' * ' + b + ' : ' + (a*b))
        
    }
}