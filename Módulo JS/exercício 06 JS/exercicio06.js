let spaceship = prompt("Digite o nome da espaçonave:");
let newNameSpaceship = "";

for (let i = spaceship.length - 1; i >= 0; i--) {
  if (spaceship[i] == "e") {
    break;
  }
  newNameSpaceship += spaceship[i];
}

alert(
  "O nome da espaçonave é:" +
    spaceship +
    "\nO Novo nome da nave é:" +
    newNameSpaceship
);
