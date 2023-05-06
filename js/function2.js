let pes = JSON.parse(localStorage.getItem("pessoa"));
document.getElementById("nmPerfil").innerHTML = pes[0].login;

const custom = document.getElementById("customizar");
let body = document.getElementById("body");
let tagP = document.get

function aparecerCadastro(){
    var divCad = document.getElementById("areaCadastro");
  
    if(divCad.style.display === 'none'){
        divCad.style.display = 'block';

    } else{
        divCad.style.display = 'none';
    }
}
function alterarStyle(){

    if(custom.value == 'custom'){
        body.style.backgroundColor = 'lightblue';
        body.style.fontFamily = 'Courier New', Courier, monospace;

        tagP.style.backgroundColor = 'white';


    } else{
        window.location.href = 'pagina3.html';
    }
}
