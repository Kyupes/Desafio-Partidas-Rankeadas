let vitorias = 10 
let derrotas = 38
let calculo = vitorias - derrotas
calcularRankeadas(calculo)
console.log ("O Herói tem saldo de " + calculo + " está no nível " + rank)

function calcularRankeadas (saldo){
    if(saldo < 10){
        rank = "Ferro"
    }else if (10 < saldo && saldo <= 20){
        rank = "Bronze"
    }else if (20 < saldo && saldo <= 50){
        rank = "Prata"
    }else if (50 < saldo && saldo <= 80){
        rank = "Ouro"
    }else if (80 < saldo && saldo <= 90){
        rank = "Diamante"
    }else if (90 < saldo && saldo <= 100){
        rank = "Lendário"
    }else if (saldo > 100){
        rank = "Imortal"
    }else {
        rank = "Ranking não compreendido"
    }
    return rank
}