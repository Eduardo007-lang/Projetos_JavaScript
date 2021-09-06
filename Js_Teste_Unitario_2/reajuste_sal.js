var assert = require('assert');

var reajuste_sal = function (salario){

    const aumento = 0.15;


    var adicional = salario * aumento;
    var reajuste = adicional + salario;
    



    return reajuste;
}

   

try {

    assert.equal(1150,reajuste_sal(1000));
    
} catch (e) {
    console.error('[ERRO]', e.message);
}
