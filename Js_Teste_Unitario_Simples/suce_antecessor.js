var assert = require('assert');


let sucessor = function(sucessor) {

    return  sucessor + 1; 
     
}

let antecessor = function(antecessor) {

    return  antecessor - 1; 
     
}


try {
    assert.equal(6, sucessor(5));
    assert.equal(4, antecessor(5));
    
    console.log(`Sucessor de 5 é ${sucessor(5)}`);
    console.log(`Antecessor de 5 é ${antecessor(5)}`);

}catch(e) {
    console.log(`Erro: ${e.message}`);
}