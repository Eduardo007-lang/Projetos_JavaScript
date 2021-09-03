var assert = require('assert');




var dias_meses = function(meses, dias){

    return meses * dias;
}



try{

        assert.equal(210, dias_meses(7, 30));
        console.log(dias_meses(7, 30));

}catch(e){
    console.log(`[Erro] em ${e}`);
}