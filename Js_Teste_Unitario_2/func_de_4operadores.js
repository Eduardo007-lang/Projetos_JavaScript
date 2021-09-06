var assert = require('assert');


let adicao = function (n1, n2) {


    return n1 + n2;


}

let subtracao = function (n1, n2) {


    return n1 - n2;


}

let multiplicacao = function (n1, n2) {


    return n1 * n2;


}

let divisao = function (n1, n2) {


    return n1 / n2;


}


try{

    assert.equal(30, adicao(10, 20));
    assert.equal(-10, subtracao(10, 20));
    assert.equal(200, multiplicacao(10, 20));
    assert.equal(0.5, divisao(10, 20));

     console.log(adicao(10, 20));
     console.log(subtracao(10, 20));
     console.log(multiplicacao(10, 20));
     console.log(divisao(10, 20));
    
} catch(e) {

    console.log(`[ERRO]: ${e}`);
}