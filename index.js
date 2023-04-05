// 12

let question = Number(prompt('Digite um valor inteiro\n'));
let question2 = Number(prompt('Digite um valor inteiro\n'));
let question3 = Number(prompt('Digite um valor Real\n'));

function alternativaA() {
    return (question ** 2) + (question2 / 2);
}
console.log('O produto do dobro do primeiro com metade do segundo é', alternativaA());

function alternativaB() {
    return (question ** 3) + question3;
}
console.log('a soma do triplo do primeiro com o terceiro é', alternativaB());

function alternativaC() {
    return question3 ** 3;
}
console.log('o terceiro elevado ao cubo é', alternativaC());


