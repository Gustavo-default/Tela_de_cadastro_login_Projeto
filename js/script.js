
var btnLogin = document.querySelector("#login");
var btnCadastro = document.querySelector("#cadastro");

var body = document.querySelector("body");

btnLogin.addEventListener("click", function(){
    body.className = "login-js";
});

btnCadastro.addEventListener("click", function(){
    body.className = "cadastro-js";
})