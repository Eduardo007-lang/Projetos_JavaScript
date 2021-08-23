

function carregar(){
    var msg = document.querySelector("#msg");
    var img = document.querySelector("#imagem")
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora > 0 && hora <= 12 ){
        //Bom dia
        img.src = 'Manha.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'Tarde.jpg';
        document.body.style.background = '#b9846f';
    } else {
        //Boa noite 
        img.src = 'Noite.jpg';
        document.body.style.background = '#515154';
    }


}