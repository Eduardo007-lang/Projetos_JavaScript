var assert = require('assert');

// variaveis
var a = 999;
var b = 555;



// Logica 
var temp = a;
var a = b;
var b = temp;


//Teste
try{
    assert.equal(555, a);
    assert.equal(999, b);

    console.log(a);
    console.log(b);

}catch(e){
    console.log(e);
}
