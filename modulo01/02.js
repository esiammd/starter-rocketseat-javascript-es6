const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const idades = usuarios.map(item => item.idade);
console.log(idades);

// 2.2
const filter = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18);
console.log(filter);

// 2.3
const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

// 2.4
// OBS: uso do operador SPREAD para criar um novo objeto de usuario modificando apenas uma propriedade
const result = usuarios
        .map(item => ({ ...item, idade: item.idade * 2 }))
        .filter(item => item.idade <= 50);
console.log(result);