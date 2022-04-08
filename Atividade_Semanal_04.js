let diasDeAluguel = 12
let KmPercorrido = 134

let valorPorDias = 60*diasDeAluguel
let valorPorKm = 0.15*KmPercorrido

let valorTotal = valorPorKm + valorPorDias

console.log(`O valor total a pagar para ${diasDeAluguel} dias e ${KmPercorrido} quilometros percorridos é ${valorTotal} reais.`)