let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let gameOver = false;
let result = '';

let selectAdversary;
let selectSymbol;

let symbols = ["playerO", "playerO", "playerX"];

let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function handleMove(position) {
    if (gameOver) return;

    selectAdversary = document.querySelector('input[name="selectOpponent"]:checked').value;
    selectSymbol = document.querySelector('input[name="selectSymbol"]:checked').value;

    if (selectSymbol === "0" && playerTime === 0) {
        playerTime = 1;
    }
    if (selectSymbol === "1" && playerTime === 0) {
        playerTime = 2;
    }

    if (board[position] === '') {
        board[position] = symbols[playerTime];
    
        console.log(playerTime)
        gameOver = isWin();

        if (!gameOver) {
            playerTime = (playerTime === 1) ? 2 : 1;
            console.log(playerTime)
        }
    }
    return gameOver;
}

function robotMoviment() {

    if (gameOver) return;

    let robotPlay;
    do {
        robotPlay = Math.floor(Math.random() * 9);
    }
    while (board[robotPlay] !== '');

    let robotSquare = document.getElementById(robotPlay.toString());
    board[robotPlay] = symbols[playerTime];
    robotSquare.innerHTML = `<div class="${board[robotPlay]}"></div>`;

        console.log(selectSymbol, selectAdversary)

    
    gameOver = isWin();
    if (!gameOver) {
        playerTime == 1 ? playerTime = 2 : playerTime = 1;
    }
    return gameOver;
}

function isWin() {
    let hasEmpty = board.some((currentSpace) => currentSpace === '');

    for (let i = 0; i < winState.length; i++) {
        let sequence = winState[i];

        let positionOne = sequence[0];
        let positionTwo = sequence[1];
        let positionThree = sequence[2];

        if (board[positionOne] === board[positionTwo] &&
            board[positionOne] === board[positionThree] &&
            board[positionOne] !== '') {
                
            result = board[positionOne];
            return [true, result];
        }
        if (!hasEmpty) {
            result = "tie";
            return [true, result];
        }
    }
    return false;
}