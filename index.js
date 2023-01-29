//Questão 1
let idade = number(prompt('Digite aqui sua idade:'));

if (idade >= 18) {
    console.log(`Esta pessoa tem ${idade} anos de idade e portando PODE dirigir!`);
} else {
    console.log(`Esta pessoa tem ${idade} anos de idade e portando NÃO dirigir!`);
}

//Questão 2
let idade2 = Number(prompt('Digite aqui sua idade:'));
let habilitacao;

if(idade2 >= 18){
 habilitacao = confirm('Você possui carteira de habilitação?');
}

if ( idade2 >= 18 && habilitacao === true){
    document.write(`Esta pessoa tem ${idade2} anos de idade e habilitação, portando PODE dirigir!`);
}else if(idade2 >= 18 && habilitacao === false){
    document.write(`Esta pessoa tem ${idade2} anos de idade, mas nao possui habilitação, portando NÃO PODE dirigir!`);
}
else{
    document.write(`Esta pessoa tem ${idade2} anos de idade e portando NÃO dirigir!`);
}


//Questão 3
let diadasemana = Number(prompt('Digite o número do dia da semana (de 1 à 7):'));

if (diadasemana === 1){
    console.log ('O primeiro dia da semana é Domingo!');
}else if (diadasemana === 2){
    console.log ('O segundo dia da semana é segunda-feira!');
}else if (diadasemana === 3){
    console.log ('O terceiro dia da semana é terça-feira!');
}else if (diadasemana === 4){
    console.log ('O quarto dia da semana é quarta-feora!');
}else if (diadasemana === 5){
    console.log ('O quinto dia da semana é quinda-feira1');
}else if(diadasemana === 6){
    console.log ('O sexto dia da semana é sexta-feira1');
}else if(diadasemana ===7){
    console.log ('O sétimo dia da semana é sábado!');
}else{
    alert('O valor digitado é inválido, por favor digite um número de 1 à 7.');
}


//Questão 4
switch (diadasemana) {
    case 1:
        console.log ('O primeiro dia da semana é Domingo!');
        break;
    case 2:
        console.log ('O segundo dia da semana é segunda-feira!');
        break;
    case 3:
        console.log ('O terceiro dia da semana é terça-feira!');
    case 4:
        console.log ('O quarto dia da semana é quarta-feora!');
        break;
    case 5:
        console.log ('O quinto dia da semana é quinda-feira1');
        break;
    case 6:
        document.write(`<h1> ${diaDaSemana[6]}</h1>`);
        break;
    case 7:
        console.log ('O sexto dia da semana é sexta-feira1');
        break;
    default:
        alert('O valor digitado é inválido, por favor digite um número de 1 à 7.');
        break;
}

//Questão 5
for (i = 1; i <=10; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}

//Questão 6

for (i = 1; i <=30; i++) {
    if(i % 2 != 0){
        document.write(`<ul><li> ${i} </li></ul>`)
    }
}

//Questão 7
let numero = 0;
let soma = 0;
let contador = 10;
numero = contador;
do {
    contador++
    soma = numero += contador;
    
} while (contador < 100);

document.write(`<h1> Resultado da soma é: ${soma} </h1>`);

//Questão 8
let salario = Number(prompt('Insira aqui o valor do seu salário:'));
const ref = 1903.98;

if (salario < ref ) {
    document.write(`<h1> O salário é se $${salario} e por isso o usuário é ISENTO DE IR </h1>`);
} else {
    document.write(`<h1>O salário é se $${salario} e por isso o usuário é TRIBUTADO NO IR </h1>`);
}

//Questão 9

let valor = Number(prompt('Insira um valor: '));
let divValor = 0;

for(let i = 1; i <= valor; i++) {

    if (valor % i == 0) {
        divValor++
        console.log(valor, i, divValor);
    }
}

if (divValor == 2) {
    document.write(O número ${valor} é PRIMO!);
} else {
    document.write(O número ${valor} NÃO é PRIMO!);
}

//Questão 10
let genero = Number(prompt('Digite aqui seu gênero, sendo 1 para Feminino e 2 para Masculino:'));
let altura = Number(prompt('Digite aqui sua altura:'));
let pesoIdeal = 0;

if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    document.write(` O seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`);
} else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
    document.write(`O seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg`);
} else {
    alert('O valor digitado não é valido!');
} 

//Questão 11
let turno = prompt('Qual turno você estuda? (“M” para matutino, “V” para vespertino ou “N” para noturno.)');

switch (turno) {
    case 'M':
        alert('Bom dia!')
        break;

    case 'V':
        alert('Boa tarde!')
        break;

    case 'N':
        alert('Boa noite!')
        break;

    default:
        alert('Não conseguimos entender, por favor, digite um valor válido:“M” para matutino, “V” para vespertino ou “N” para noturno.')
        break;
}

//Questão 12
let idadedoador = Number(prompt('Digite aqui a sua idade:'));

if (idadedoador >= 18 && idadeDoador <= 67) {
    alert('Pode doar Sangue!')
} else {
    alert('Não pode doar Sangue!')
}

//Questão 13
let num = Number(prompt('Digite um numero:'));

for (i = 0; num >= 1; num--){

    if (num % 2 != 0) {

        console.log(num);
        
    }
}


//Questão 14
let num2 = Number(prompt('Digite um numero:'));
let soma1 = 0;

while (num2 * 3 <= 500) {
  soma1 = num2 * 3;
  num2 = soma1
}

console.log(soma1);

//Questão 15
let ladoA = Number(prompt('Digite o valor do primeiro lado do triangulo: '));
let ladoB = Number(prompt('Digite o valor do segundo lado do triangulo: '));
let ladoC = Number(prompt('Digite o valor do terceiro lado do triangulo: '));

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    if (ladoA - ladoB === 0 && ladoA != ladoC || ladoA - ladoC === 0 && ladoB != ladoC || ladoB - ladoC === 0 && ladoC != ladoA ) {
        console.log('Triângulo isósceles');
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        console.log('Triângulo escaleno');
    } else if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo equilátero');
    }
} else {
    console.log('Os valores informados nao são válidos1!');
}

//Questão 16
let anonasceu = Number(prompt('Digite o seu ano de nascimento:'));
const anoatual = 2023;

if (anoatual - anonasceu < 16){
console.log ("Não pode votar!");
}else {
console.log ("Pode votar!");
}

//Questão 17
let NU = 300;
let BA = 275;
let VA = 425;

NT = NU + BA + VA;
console.log ("O número total de votos é igual a:", NT);

let PNU = NU/NT*100;
console.log ("a porcentagem de votos nulos é:", PNU);

let PBA = BA/NT*100;
console.log ("a porcentagem de votos em branco é:", PBA);

let PVA = VA/NT*100;
console.log ("a porcentagem de votos válidos é:", PVA);

//Nu= Votos nulos//
//BA= Votos em branco//
//VA= Voto válidos//
//NT=número total de votos//
//PNU= Porcentagem de votos nulos//
//PBA= Porcentagem de votos em branco//
//PVA= Porcentagem de votos válidos//

//Questão 18
let valorDaCompra = Number(prompt('Digite o valor da compra:'));
let quantidadeDeParcelas = Number(prompt('Digite a quantidade de parcelas:'));
const aVista = 2.5;
const duasAcinco = 0;
const seisAdez = 6;
const onzeAquinze = 13;
let calculo = 0;

if (quantidadeDeParcelas === 0) {
    calculo = (valorDaCompra / 100) * 97.5 ;
    console.log(`O valor da compra é de R$${valorDaCompra} com desconto fica: R$${calculo.toFixed(2)}`)
} else if(quantidadeDeParcelas >= 2 && quantidadeDeParcelas <= 5) {
    calculo = (valorDaCompra / 100) * 100 ;
    console.log(`Não há descontos ou acrecimos, O valor da compra é de R$${valorDaCompra}`)
} else if(quantidadeDeParcelas >= 6 && quantidadeDeParcelas <= 10) {
    calculo = (valorDaCompra / 100) * 106 ;
    let valorParcela = calculo / quantidadeDeParcelas;
    console.log(`O valor da compra é de R$${valorDaCompra}, o valor da parcela é de R$${valorParcela.toFixed(2)}. O valor total com acrecimo fica em R$${calculo.toFixed(2)}`)
}else if(quantidadeDeParcelas >= 11 && quantidadeDeParcelas <= 15) {
    calculo = (valorDaCompra / 100) * 113 ;
    let valorParcela = calculo / quantidadeDeParcelas;
    console.log(`O valor da compra é de R$${valorDaCompra}, o valor da parcela é de R$${valorParcela.toFixed(2)}. O valor total com o acrecimo fica em R$${calculo.toFixed(2)}`)
} else {
    alert('Valores invalidos!')
}
