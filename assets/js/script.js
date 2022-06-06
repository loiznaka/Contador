// Seta o contador como 0
let count = 0;

// Variáveis
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count ;

    // Alteração de Cor se Positivo.
    if(count >= 0) {
        CURRENT_NUMBER.style.color='white';
    }
    // Limitador
    if( count == 10){
        document.getElementById("LimitResponse").innerHTML = "Você atingiu o limite. Não pode mais adicionar !";
        document.getElementById("adicao").disabled = true;
    } else {
        document.getElementById("LimitResponse").innerHTML = "";
        document.getElementById("subtracao").disabled = false;
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count ;

    // Alteração de Cor se Negativo.
    if(count < 0) {
        CURRENT_NUMBER.style.color='#8A0808';
    }
    // Limitador
    if( count == -10){
        document.getElementById("LimitResponse").innerHTML = "Você atingiu o limite. Não pode mais remover !";
        document.getElementById("subtracao").disabled = true;
    } else {
        document.getElementById("LimitResponse").innerHTML = "";
        document.getElementById("adicao").disabled = false;
    }
}