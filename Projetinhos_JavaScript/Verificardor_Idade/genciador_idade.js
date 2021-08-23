function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("#txtnasc");
    var resultado = document.querySelector("#result");

    if(fano.value.length == 0 || fano.value > ano){
        alert("ERRO: TENTE NOVAMENTE, INSERINDO DADOS NO CAMPO! ")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', '../public/img/Pessoa/crianca_H.jpg');
               
            } else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', '../public/img/Pessoa/jovem_H.jpg');
    
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', '../public/img/Pessoa/adulto_H.jpg');
               
            } else {
                //idoso
                img.setAttribute('src', '../public/img/Pessoa/idoso_H.jpg');
               
            }

        } else if(fsex[1].checked){
            genero = 'Mulher';

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', '../public/img/Pessoa/crianca_M.jpg');
               
            } else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', '../public/img/Pessoa/jovem_M.jpg');
               
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', '../public/img/Pessoa/adulta_M.jpg');
               
            } else {
                //idoso
                img.setAttribute('src', '../public/img/Pessoa/idosa_M.jpg');
                
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img);
    }
}