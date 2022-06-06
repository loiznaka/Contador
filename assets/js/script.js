let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count ;

    if(count >= 0) {
        CURRENT_NUMBER.style.color='white';
    }
    // Limitador
    if(count == 10){
        limit_response.innerHTML = "Você atingiu o limite. Não pode mais adicionar !";
    } else {
        limit_response.innerHTML = ""
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count ;

    if(count < 0) {
        CURRENT_NUMBER.style.color='#8A0808';
    }
}