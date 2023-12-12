const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function comparacao(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = comparacao(campoA.value, campoB.value)
    if(validarForm){
        alert('é maior que campo A')
    }else{
        alert('Valor é menor que campo B')
    }
}) 