let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count ;

    if(count >= 0) {
        CURRENT_NUMBER.style.color='white';
    }
    // Limitador
    if( count == 10){
        document.getElementById("LimitResponse").innerHTML = "Você atingiu o limite. Não pode mais adicionar !";
        document.getElementById("adicao").disabled = true;
    }
}



function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count ;

    if(count < 0) {
        CURRENT_NUMBER.style.color='#8A0808';
    }
    // Limitador
    if( count == -10){
        document.getElementById("LimitResponse").innerHTML = "Você atingiu o limite. Não pode mais remover !";
        document.getElementById("subtracao").disabled = true;
    }
}