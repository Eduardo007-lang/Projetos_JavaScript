var assert = require('assert');

var area = function(lado1, lado2){
    return lado1 * lado2;
} 


try {

  assert.equal(27, area(3,9), "Retorna o valor da area");

  console.log(area(3,9));

}catch(e) {
    console.log(e)
}