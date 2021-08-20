var assert = require('assert');


let media_Simples = function(valor1, valor2, valor3) {

    return (valor1 + valor2 + valor3) / 3;

}




try {

    assert.equal(7, media_Simples(10, 5, 6));
    console.log(media_Simples(10, 5, 6));
   

}catch(e) {

    console.log(e);
}