const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const numeroMaior = document.getElementById('numeroMaior');
const numeroMenor = document.getElementById('numeroMenor');

function comparacao(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = comparacao(campoA.valueAsNumbe, campoB.valueAsNumbe)
    if(validarForm){
        
    }else{
        alert('Valor é menor que campo B')
    }
}) 