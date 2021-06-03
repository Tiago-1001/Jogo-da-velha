let p = document.querySelector(".pH1")
let div = document.querySelector(".background");
let emoji = document.querySelector("#winner")


function playAgain() {
    window.location.reload();
}

function winner(result) {
    div.style.display = "flex";

    if (result === "playerO") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerO');
    }

    if (result === "playerX") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerX');
    }
    if (result === "tie") {
        p.innerHTML = "Deu velha :)"

        emoji.classList.add('winnerOldWoman');
    }
}