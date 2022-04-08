let distanciaViagem = 689
let velocidadeMedia = 80

let tempoDeViagem = distanciaViagem/velocidadeMedia
let tempoDeViagemHoraFracionada = tempoDeViagem%parseInt(tempoDeViagem)
let tempoDeViagemMinutos = tempoDeViagemHoraFracionada*60

let tempoDeViagemFinal = parseInt(tempoDeViagem) + " horas e " + parseInt(tempoDeViagemMinutos) + " minutos"

console.log(`O tempo de viagem de uma distância de ${distanciaViagem} quilometros em uma velocidade média de ${velocidadeMedia} km/h será de ${tempoDeViagemFinal}.`)
