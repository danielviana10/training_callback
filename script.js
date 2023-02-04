const button = document.getElementById('btn');

const callback = function () {
    console.log('Clicou');
};

button.addEventListener('click', callback);
//Verifique o resultado do evento em seu console
