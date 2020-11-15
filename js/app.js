/*-------------------------------- Constants --------------------------------*/
//  These winning variables do not change
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
let turn = 'X';
let winner;
let board = ['', '', '', '', '', '', '', '', ''];


/*------------------------ Cached Element References ------------------------*/
// Establishes element references to spaces and messege

const squares = document.querySelectorAll('#board div');
const messages = document.querySelector('#messege');

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



function init() {} 
