document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (board[position] !== '') return;

    if (handleMove(position)) {        
        setTimeout(() => {
            winner(isWin()[1]);
        }, 220);
    };
    updateSquare(position, square);

    if (selectAdversary == "1") setTimeout(() => {if (robotMoviment()) {setTimeout(() => {winner(isWin())}, 600)}}, 700);

}

function updateSquare(position, square) {
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}