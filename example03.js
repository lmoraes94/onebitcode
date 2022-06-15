let velocity = 40

switch (velocity * 2) {
    case 80:
    case 90:
    case 100:
        console.log("velocidade aceitavel")
    break
    case 110:
        console.log("velocidade de risco")
    break
    default:
        console.log("velocidade de 160km/h")
}