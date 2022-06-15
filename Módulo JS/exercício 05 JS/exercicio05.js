let spaceship = prompt("Qual o nome da sua nave?");
let caracter = prompt(
  "Qual o caracter que você deseja substituir no nome da sua nave?"
);
let alterCaracter = prompt("Por qual caracter que você deseja substituir?");
let newSpaceship = "";

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == caracter) {
    newSpaceship += alterCaracter;
  } else {
    newSpaceship += spaceship[i];
  }
}

alert ("O novo nome da sua nave é:"  +  newSpaceship);
