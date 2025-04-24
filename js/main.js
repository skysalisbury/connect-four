/*----- constants -----*/
//look up datastructure
const COLORS = {
    '1': 'purple',  
    '-1': 'orange',  
    'null': 'white',  
};

/*----- state variables -----*/
//Define, but do not assign to (initialize)
// Always use let, because they change over time.
let board;      //2dArray / 1/-1 -> player value; null -> cell is empty
let winner;       //- null -> no winner or tie, game is in progress; 1/-1 -> the player that won;
//  'Tie' -> the game has tied
let turn;      //1/-1 -> the player whose turn it is


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();


// The init function's purpose is to initialize all state, then call render()
// The only function to call outside of event listeners is init function
function init() {
    // To visualize the mapping (connection) between the board array and the "cells"/divs
    // in the DOM, "rotate" the board 90 degrees counter-clockwise 
    board = [
        [null, null, null, null, null, null],   //col 0
        [null, null, null, null, null, null],   //col 1
        [null, null, null, null, null, null],   //col 2
        [null, null, null, null, null, null],   //col 3
        [null, null, null, null, null, null],   //col 4
        [null, null, null, null, null, null],   //col 5
        [null, null, null, null, null, null],   //col 6
    ];
    winner = null;
    turn = 1;
    render();
}
//The purpose of render function is to "transfer"/visualize ALL state to/in the DOM.
function render() {
    renderBoard();
    // renderMessage();
    // renderControls(); 
};

function renderBoard() {
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
};