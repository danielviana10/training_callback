// --callback como function anonima
// const button = document.getElementById('btn');

// const callback = function () {
//     console.log('Clicou (callback como function anonima)');
// };

// button.addEventListener('click', callback);
//Verifique o resultado do evento em seu console


// --function anonima
// const button = document.getElementById('btn');

// button.addEventListener('click', function () {
//     console.log('Clicou (function anonima)');
// });
//Verifique o resultado do evento em seu console


// --callback com arrow function
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    console.log("Clicou");
})