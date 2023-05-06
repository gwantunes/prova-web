function aparecerLogin(){
  let divLogin = document.getElementById("areaLogin");

  if(divLogin.style.display === 'none'){
    divLogin.style.display = 'block';
  } else{
    divLogin.style.display = 'none';
  }
}
function autenticar() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  if (login.replaceAll(" ", "") == "" || senha.replaceAll(" ", "") == "") {
    alert('Informe os dados de autenticação');
  } else {
    localStorage.setItem("login", login.trim());
    localStorage.setItem("senha", senha.trim());

    localStorage.setItem("pessoa", '[{"login": "' + login.trim() + '", "senha": "' + senha.trim() + '"}]');

    const novaPagina = 'pagina3.html';
    window.location.href = novaPagina;
  }
}

