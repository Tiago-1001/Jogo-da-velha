let p = document.querySelector(".pH1")
let div = document.querySelector(".background");
let emoji = document.querySelector("#winner")


function playAgain() {
    window.location.reload();
}

function winner(result) {
    div.style.display = "flex";
    
    selectSymbol === 0 ? humanSymbol = 'playerO' : humanSymbol = 'playerX';
    selectSymbol === 0 ? robotSymbol = 'playerX' : robotSymbol = 'playerO';


    if (selectAdversary == "0" && result === "playerX") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerX');
    }

    if (selectAdversary == "0" && result === "playerO") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerO');
    }

    if (selectAdversary == "1" && result === "playerX") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerX');
    }
    
    if (selectAdversary == "1" && result === "playerO") {
        p.innerHTML = "O vencedor foi:";

        emoji.classList.add('winnerplayerO');
    }

    if (result === "tie") {
        p.innerHTML = "Deu velha :)"

        emoji.classList.add('winnerOldWoman');
    }
}