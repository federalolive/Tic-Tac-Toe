/*-------------------------------- Constants --------------------------------*/
//  Sets constants of my board to show that one player will be red and the other green. On spaces where no player has used the color will be white or empty and availible. const game

 const InfoAboutBoard = {
    '1': 'green',
    '-1': 'red',
    'null': 'white'
};


const winningCombos = [ // Array of winning combinations 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];



/*---------------------------- Variables (state) ----------------------------*/
// Defines the variables of the game
let board, turn, winner;

board = ['', '', '', '', '', '', '', '', ''];


/*------------------------ Cached Element References ------------------------*/
// Establishes element references to spaces and messege

const spaces = document.querySelectorAll('sq');
const messege = document.querySelectorAll('h1')

/*----------------------------- Event Listeners -----------------------------*/
// This is where you should put the event listener
// for a mouse-click

document.querySelector('board').addEventListener('click'), 'makeMove';
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/
// Setting up the board
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
        render(); 
};
// need makeMove function
function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

// Winning Logic - sets up logic using the array winningCombos and a ternary isindie the function to test if a player has won.
function getWinner() {
    let winner = null; 
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
};

function render() {
    board.forEach(function(mark, index) {
        sqaures[index].textContent = mark;
    });
    if (winner === 'T') {
        messege.innerHTML = "It's a tie!";
    } else if (winner) {
        messege.innerHTML = `${winner} Wins!!`;
    } else {
        messege.innerHTML = `It's ${turn}'s turn`;
        }
    }



init();
