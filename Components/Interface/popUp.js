let p = document.querySelector(".pH1")
let div = document.querySelector(".background");
let emoji = document.querySelector("#winner")

function winner() {
    div.style.display = "flex";
    
    p.innerHTML = "O vencedor foi:"

    if (playerTime === 0) {
        emoji.classList.add('winnerplayerO');
    } else {
        emoji.classList.add('winnerplayerX');
    }
}

function tie() {
    div.style.display = "flex";
    p.innerHTML = "Deu velha :)"

    emoji.classList.add('winnerOldWoman');
   
}

function playAgain() {
    window.location.reload();
}