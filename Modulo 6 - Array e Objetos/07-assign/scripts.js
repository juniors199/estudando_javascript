let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
};

let objetoB = {
    prop3: 'propriedade',
};

Object.assign(objetoA, objetoB);

console.log(objetoA);


let carro = {
    porta: 2,
    portamalas: '200l',
    motor: 2.0,
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);


Object.assign(carro, adicionais);

console.log(carro);
