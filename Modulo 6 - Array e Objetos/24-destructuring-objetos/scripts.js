const person = {
    nome: 'Jhon',
    lastname: 'Doe',
}

// Criando variaveis a partir de um objeto.

const {nome: fname, lastname: lname} = person;

console.log(`${fname} ${lname}`);


let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0',
}
//Esta é a sintaxe padrao. Muito usado em VueJS tambem
// const {propriedade: variavel, } = obj


const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);