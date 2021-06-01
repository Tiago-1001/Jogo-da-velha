function winner(position) {
    let div = document.querySelector(".background");

    div.style.display = "flex";

    if (playerTime === 0) {
        document.querySelector('#winner')
            .classList.add('winnerplayerO');
    } else {
        document.querySelector('#winner')
            .classList.add('winnerplayerX');
    }

}

function playAgain() {
    window.location.reload();
}