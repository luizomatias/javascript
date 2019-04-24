function clicou(){
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
  //alert('Obrigado por clicar!');
}

function redirecionar(){
  window.open("https://www.google.com/");
  //window.location.href = "https://www.google.com/"; mesma janela
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("pagina carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}
/*
function soma (n1, n2){
  return n1 + n2;
}
function validaIdade(idade){
  var validar;
  if (idade >= 18){
    var validar = true;
  } else {
    var validar = false;
  }
  return validar;
  
}

var idade = prompt("Qual é a sua idade? ");
console.log(validaIdade(idade));
//alert(soma(5, 10));
*/
//function setReplace(frase, nome, novo_nome){
//  return frase.replace(nome, novo_nome);
//}

//alert(setReplace('Olá, meu nome é Luiz', 'Luiz', 'Maria'));

//var d = new Date();
//alert(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());



//for(var count = 0; count < 5; count++){
//  console.log(count);
//}

/*
var count = 0;
while (count <= 5){
  console.log(count);
  count++;
}
*/
/*
var idade = prompt("Qual é a sua idade? ");
if (idade >= 18){
  alert("maior de idade");
} else {
  alert("menor de idade");
}
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ];
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.nome);


//var lista = ["maça", "pera", "laranja"];
//lista.push("morango");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var nome = "Luiz Matias";
var idade = 26;
var idade1 = 10;
var frase = "Japão é um país desenvolvido"
//alert(nome + " tem " + idade + " anos.");
console.log(nome);
console.log(idade + idade1);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase())
*/
