const name = prompt("Qual nome do piloto?")
const namePilot = alert("Seja bem vindo, " + name)
let velShip = 0
let velShipPilot = prompt("Em qual velocidade você gostaria de acelerar a nave?")
confirm("Você está indo para velocidade de " + velShipPilot + "km/s")
if (velShipPilot == 0) {
    alert("A nave está parada!")
} else if (velShipPilot < 40) {
    alert("Você está devagar, podemos acelerar mais!")
} else if (velShipPilot < 80) {
    alert("Parece uma boa velocidade para se manter!")
} else if (velShipPilot < 100) {
    alert("Velocidade de risco, considere diminuir!")
}else{
    alert("Freio de segurança acionados, velocidade altissima detectada!")
}

alert("Nome do piloto: " + name + "\nVelocidade atual: " + velShipPilot + "km/s")