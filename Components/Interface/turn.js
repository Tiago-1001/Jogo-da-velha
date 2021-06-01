setInterval(function turn() {
    let playerOne = document.querySelector(".playerOne");
    let player1 = document.querySelector(".player1");
    let playerTwo = document.querySelector(".playerTwo");
    let player2 = document.querySelector(".player2");


    
    if (playerTime === 0) {
        playerOne.style.display = "inline-block";
        player1.style.display = "inline-block";

        playerTwo.style.display = "none";
        player2.style.display = "none";
    } else {
        playerOne.style.display = "none";
        player1.style.display = "none";

        playerTwo.style.display = "inline-block";
        player2.style.display = "inline-block";
    }
});