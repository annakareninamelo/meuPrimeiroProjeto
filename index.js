let heroi = "Vinicius"
let xP = "10000"
let nivelHeroi = " "

    if (xP >= 1000 && xP <= 1001){
        nivelHeroi = "Ferro"
    } else if (xP >= 1001 && xP <=2000){
            nivelHeroi= "Bronze"
    } else if (xP >= 2001 && xP <=5000){
         nivelHeroi = "Prata"
    } else if (xP >= 5001 && xP <=7000){
        nivelHeroi = "Ouro"
    } else if (xP >= 7001 && xP <=8000){
         nivelHeroi = "Platina"
    } else if (xP >= 8001 && xP <=9000){
         nivelHeroi = "Ascendente"
    } else if (xP >= 9001 && xP <=10000){
         nivelHeroi = "Imortal"
    } else {
            nivelHeroi = "Radiante"
    }

console.log ("O herói de nome  " + heroi  + " está no nível de  " +  nivelHeroi)