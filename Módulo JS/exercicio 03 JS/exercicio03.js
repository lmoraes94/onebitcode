const medidaAnosLuz = prompt("Qual a distancia em anos-luz?")
const conversao = prompt("Qual conversão deseja realizar? \nDigite o número da opção desejada: \n1- Parsec(Pc) \n2- Unidade astronômica(AU) \n3- Quilômetros(Km)")





switch (conversao){
    case "1":
        alert(medidaAnosLuz + " anos-luz em Parsec é = " + medidaAnosLuz*0.306601 + " Pc")
    break
    case "2":
       alert(medidaAnosLuz + " anos-luz em Unidade Astronômica é = " + medidaAnosLuz*63241.1 + " AU")
    break
    case "3":
       alert(medidaAnosLuz + " anos-luz em Quilômetros é = " + medidaAnosLuz*(9.5*Math.pow(10,12)) + " Km")
    break
    default:
        alert("Unidade não identificada: Conversão fora do escopo")
    }