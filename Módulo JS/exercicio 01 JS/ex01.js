const oldName = prompt("Digite o nome da pessoa mais velha");
const oldAge = prompt("Digite a idade da pessoa mais velha");
const newName = prompt("Digite o nome da pessoa mais nova");
const newAge = prompt("Digite a idade da pessoa mais velha");
const diferencaIdade = oldAge - newAge;
alert(
  "A diferença de idade entre as duas pessoas é de: " + diferencaIdade + " anos"
);

alert(
  "O(A) mais velho(a) é o(a): " +
    oldName +
    "\n Sua idade é de: " +
    oldAge +
    " anos" +
    "\n\nO(A) mais novo(a) é o(a): " +
    newName +
    "\n Sua idade é de: " +
    newAge +
    " anos" +
    "\n\n e a diferença de idade entre os dois é de: " +
    diferencaIdade +
    " anos"
);
