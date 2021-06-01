let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let symbols = ['playerO', 'playerX'];
let gameOver = false;

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] === '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {
            if (playerTime === 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;
}

function isWin() {
    let winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winState.length; i++) {
        let sequence = winState[i];
        let positionOne = sequence[0];
        let positionTwo = sequence[1];
        let positionThree = sequence[2];
        
        if (board[positionOne] === board[positionTwo] &&
            board[positionOne] === board[positionThree] &&
            board[positionOne] !== '') {
            
            return true;
        }
    }
    return false;
}