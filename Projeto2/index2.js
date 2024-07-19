function rank(victory, defeat) {
    let resultado = victory - defeat;
    return resultado;
}

let resultado = rank(170, 50);

if (resultado <= 10) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Ferro");
} else if (resultado <= 20) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Bronze");
} else if (resultado <= 50) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Prata");
} else if (resultado <= 80) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Ouro");
} else if (resultado <= 90) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Diamante");
} else if (resultado >= 100 && resultado < 101) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Lendário");
} else if (resultado >= 101) {
    console.log("O Herói tem saldo de " + resultado + ", O Herói está no nível de Imortal");
}