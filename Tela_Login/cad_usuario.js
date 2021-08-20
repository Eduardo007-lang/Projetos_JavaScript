var botao = document.querySelector("#btn");
botao.addEventListener("click", entrar);
var dados = [];



function entrar(){
     var user = document.querySelector("#usuario");
     var password = document.querySelector("#senha");
     
     

     if(user.value.length == 0 || password.value.length == 0){

        alert("[Error] Algum campo esta vazio!");

     }else{ 
            
        dados.push(user.value);
        dados.push(password.value);


        alert(`Bem-vindo!!,  ${user.value}`);

     }
        
}