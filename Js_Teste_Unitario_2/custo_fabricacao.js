var assert = require('assert');



var custo_final = function(custo_fabrica){


    percentual_distribuidor = custo_fabrica * 0.28;
    percentual_imposto = custo_fabrica * 0.45;
    


    
    return custo_fabrica + percentual_distribuidor + percentual_imposto;

}

console.log(custo_final(10000));


try {

    assert.equal(17300, custo_final(10000));

}catch(e){

    console.log(`[ERRO] ${e.message}`);
}