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

const squares = document.querySelectorAll('[square]');
const messages = document.querySelector('.messeges');

/*----------------------------- Event Listeners -----------------------------*/
// This is where you should put the event listener
// for a mouse-click

document.getElementById('board').addEventListener('click', makeMove);
document.querySelector('.restartButton').addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

// need makeMove function
function makeMove(e) {
    let idx = parseInt(e.target.id.replace('sq', '')); 
        if (board[idx] || winner) return;
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
    board.forEach(function(sq, idx) {
      squares[idx].textContent = board[sq];
    });
    if (winner === 'T') {
      message.innerHTML = 'Rats, another tie!';
    } else if (winner) {
      message.innerHTML = `Congrats ${[winner].toUpperCase()}!`;
    } else {
      message.innerHTML = `${winner[turn].toUpperCase()}'s Turn`;
    }
  }

function init() {
    let board = ['', '', '', '', '', '', '', '', ''];
    winner = null;
    render();
};

init();

// Spent way too many hours trying to fix this game, I have the logic all there, but I cannot seem to make the game function in the browser. I will definetly be returning and finishing this game, but as it stands I am looking more forward to our project than tic-tac-toe.