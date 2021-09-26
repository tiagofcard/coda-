var nome = "Tiago Cardoso";
var cargo = "Cozinheiro";

var cargoHtml = document.getElementById("cargo-html");
var nomeHtml = document.getElementById("nome-html");
var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");

function colocarNomeNoHtml(nome){
        nomeHtml.innerHTML = nome;
}
function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    console.log("clicou no botão projetos");
    text2.style.display = "block";
    text1.style.display = "none";
}

function clickNoSobre(){
    console.log("clicou no botão sobre");
    text1.style.display = "block";
    text2.style.display = "none";
}
colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);