const letras = ['a','b','c','d','e'];

function forEach(array, callbackParaCadaItem){
    for(let i = 0; i < array.length; i++){
        const letraAtual = array[i]
        callbackParaCadaItem(letraAtual, i, array); 
    }
}
forEach(letras, function(letraAtual, i, array){
    console.log(letraAtual)
})