let num = [5, 6, 7, 8, 9, 10, 11];


num.sort();


for(let c in num) {
    console.log(num[c]);
}

let pos = num.indexOf(20);

if(pos == -1) {

    console.log(`Valor não encontrado!`)
}else{
    console.log(`Valor esta na posição ${pos}`);
}
