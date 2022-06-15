let shipName = prompt("Qual o nome da sua nave?");
let travelDobras = confirm("Deseja entrar em dobra espacial?");
let dobraInicial = 0

while(travelDobras == true){

 dobraInicial += 1
 alert("Dobra realizada com sucesso!")
 travelDobras = confirm("Deseja realizar outra dobra espacial?");
}

alert("Obrigado por usar o nosso sistema de dobra espacial, " + shipName + "!" + " Você realizou " + dobraInicial + " dobras espaciais.")