function aparecerLogin(){

  let div = document.getElementById("areaLogin");

  div.style.display = "block";
}
function autenticar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
  
    if (login.replaceAll(" ", "") == "" || senha.replaceAll(" ", "") == "") {
      alert('Informe os dados de autenticação');
    } else {
      armazenar(login, senha);
    }
  }
  
function armazenar(login, senha) {
  localStorage.setItem("login", login.trim());
  localStorage.setItem("senha", senha.trim());
  
  const novaPagina = 'pagina3.html';
  window.location.href = novaPagina;
}



  