const createPlayers = ( name, mark, turn) => {
    return { name, mark, turn };
};


const gameBoard = (() => {

    const board = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
          board[i] = "";
        }
    };

    //display the cells
    let boardcontainer = document.querySelector('.boardcontainer');
    board.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        boardcontainer.appendChild(cell);
        cell.innerText=item;
    })


    return {
        board
    };
    
})

const game = (() => {

    const player1 = createPlayers('player 1', 'X', true);
    const player2 = createPlayers('player 2', 'O', false);

    let winner = null;
    let turns = 0;

    let activeplayer = player1;

})