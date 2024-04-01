const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');

let score1 = 0;
let score2 = 0;
let isGameOver = false;
let rounds = 4;

btn1.addEventListener('click', function(){
    if(!isGameOver){
    player1.textContent++;        
        if (score1===rounds) {
            isGameOver = true;
        }
        // player1.textContent = score1;
    }
    
})
btn2.addEventListener('click', function() {
    if(!isGameOver){
        player2.textContent++;        
        
        if (score2===rounds) {
            isGameOver = true;
        }
        // player2.textContent = score2;
    }
    
})

playto.addEventListener('change', function() {
    rounds = parseInt(this.value);
    reset();
})

reset.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    player1.textContent = 0;
    player2.textContent = 0;

}