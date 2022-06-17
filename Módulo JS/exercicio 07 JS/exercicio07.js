// variáveis que serão utilizadas durante a execução do programa
let spaceshipName = prompt("Digite o nome da sua nave!");
let spaceshipVelocity = 0;
let chosenOption; // variavel vazia pois vai receber um valor durante a execução do programa

//essa opção é para o usuário escolher a opção de acelerar, desacelerar, imprimir os dados de bordo ou sair do programa
function showMenu() {
  let option; // variável vazia pois vai receber um valor durante a execução do programa
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    // os valores da variável option devem ser 1, 2, 3 ou 4, o que for diferente disso será repetido até o usuário digitar uma opção válida
    option = prompt(
      "O que deseja fazer? \n1- Acelerar a nave? \n2- Desacelerar a nave? \n3- Imprimir os dados de bordo? \n4- Sair do programa?"
    );
  }
  return option;
}

// essa função permite acelerar a nave de 5 em 5km/s
function speedUp(velocity) {
  let newVelocity = velocity + 5;
  return newVelocity;
}

// essa função permite desacelerar a nave de 5 em 5km/s
function speedSlow(velocity) {
  let newVelocity = velocity - 5;
  if (newVelocity < 0) {
    newVelocity = 0;
  }
  return newVelocity;
}

// Função para imprimir os dados de bordo da nave (name, velocity) = parametros da função, valores serão atribuidos na chamada dessa função
function printSpaceshipBoardData(name, velocity) {
  alert("Espaçonave: " + name + "\nVelocidade atual: " + velocity + " km/s");
}

do {
  //FAZER ESSE BLOCO DE CÓDIGO
  chosenOption = showMenu(); // a função showMenu é o valor da variável chosenOption
  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity); // (spaceshipVelocity) valor atribuido ao parametro da funcao speedUp
      break;
    case "2":
      spaceshipVelocity = speedSlow(spaceshipVelocity); // (spaceshipVelocity) valor atribuido ao parametro da funcao speedSlow
      break;
    case "3":
      printSpaceshipBoardData(spaceshipName, spaceshipVelocity); // (spaceshipName, spaceshipVelocity) valores atribuidos aos parametros da funcao printSpaceshipBoardData
      break;
    default:
      alert("Obrigado por usar o programa!");
  }
} while (chosenOption != "4"); // ENQUANTO A OPÇÃO ESCOLHIDA FOR DIFERENTE DE 4
