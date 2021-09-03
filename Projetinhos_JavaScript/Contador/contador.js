
var resultado = document.querySelector("#contar");
resultado.addEventListener('click', contador)

function contador(){

    let inicio = document.querySelector("#txti")
    let fim = document.querySelector("#txtf");
    let passo = document.querySelector("#txtp");
    let resultado = document.querySelector("#res")


    if(inicio.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0){

        alert("[ERR0:] Campos Vazios!!!");

    }else{

            res.innerHTML = 'Contando: ';
            let ini = Number(inicio.value);
            let fi  = Number(fim.value);
            let pas = Number(passo.value);

        for ( let cont = ini; cont <= fi; cont += pas) {
            
            res.innerHTML += `${cont} \u{1F449}`
                
        }       
            res.innerHTML += `\u{1F3C1}`
    }    
}

    

