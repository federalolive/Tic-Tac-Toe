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

/*-------------------------------- Functions --------------------------------*/
initialize();

// need makeMove function


// Winning Logic - sets up logic using the array winningCombos and a ternary isindie the function to test if a player has won.
function getWinner() {
    let winner = null; 
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
    }

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is