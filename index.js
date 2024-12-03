let vitorias = 50
let derrotas = 38
let saldo = vitorias - derrotas
console.log ("O Herói tem saldo de " + saldo + " está no nível " + saldoRankeadas)

function saldoRankeadas (saldo){
    if(saldo){
        saldo < 10
        saldoRankeadas = "Ferro"
    }else if (saldo){
        10 < saldo <= 20
        saldoRankeadas = "Bronze"
    }else if (saldo){
        20 < saldo <= 50
        saldoRankeadas = "Prata"
    }else if (saldo){
        50 < saldo <= 80
        saldoRankeadas = "Ouro"
    }else if (saldo){
        80 < saldo <= 90
        saldoRankeadas = "Diamante"
    }else if (saldo){
        90 < saldo <= 100
        saldoRankeadas = "Lendário"
    }else if (saldo){
        saldo > 100
        saldoRankeadas = "Imortal"
    }
    return saldoRankeadas
}