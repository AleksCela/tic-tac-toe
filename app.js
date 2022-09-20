const gameBoard = (() => {
    const createPlayers = ( name, mark, turn) => {
        return { name, mark, turn };
    };
    const player1 = createPlayers('player 1', 'X', true);
    const player2 = createPlayers('player 2', 'O', false);

    let winner = null;
    let turns = 0;

    const board = ["", "", "", "", "", "", "", "", ""];

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
          board[i] = "";
        }
    };
    
    
})
