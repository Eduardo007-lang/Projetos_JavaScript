var assert = require('assert');



var dobro = function (valor_Q) {

    return valor_Q * 2;
}


try {
    assert.equal(10, dobro(5));
    
}catch(e) {
    console.log(e);
}
