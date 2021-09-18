var assert = require('assert');


var par_impar = function(num){

     if( num % 2 == 0){
        return true;
    }else{
        return false;
    }
}


try{

    assert.ok(par_impar(8));

}catch(e){

    console.log(`[ERRO] ${e}`);
}