// Criando as variáveis para armazenar o nome e o XP do herói
let nomeHeroi = "Heather"; // Substitua por qualquer nome
let xpHeroi = 8500; // Substitua pelo valor de XP desejado

// Função para determinar o nível do herói com base no XP
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata"; // Note que "Ouro" foi incluído no mesmo intervalo
    } else if (xp >= 5001 && xp <= 8000) {
        return "Platina"; // Note que "Diamante" foi incluído no mesmo intervalo
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Chamando a função para determinar o nível e exibindo o resultado
let nivelHeroi = determinarNivel(xpHeroi);
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi);