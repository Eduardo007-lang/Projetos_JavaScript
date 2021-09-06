var assert = require('assert');


var juros_simples = function(capital, periodos){

    const tx_Imprestimo = 0.04;

    
    var juros = capital * tx_Imprestimo * periodos;   

    return juros;

}

console.log(juros_simples(16000, 4));

try {

    assert.equal(2560,  juros_simples(16000, 4));


    
} catch (error) {
    console.log('[Error' + error.message );
}




