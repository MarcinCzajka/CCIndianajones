function riddleSolver(board) {
    if(!board) return;

    const width = board[0].length - 1;
    const height = board.length - 1;

    for (let y = 0; y <= height; y++) {
        for(let x = 0; x <= width; x++) {
            gravity(board)
            if(board[y][x] !== 0) {
                if(removeAdjacentItems(y, x) === true) {
                    y = 0;
                    x = -1;
                }
            }
        }
    }

    function removeAdjacentItems(y, x) {
        if (x < width && board[y][x] === board[y][x + 1]) {
            
            let counter = 1;
            for(let i = x + 1; i <= width; i++) {
                if (board[y][x] === board[y][i]) counter++;
                else break;
            }
                if(counter>2) {
                    for(let i = x; i < counter+x; i++) {
                        board[y][i] = 0;
                    }
                    return true
                }
        }

        if (y < height && board[y][x] === board[y + 1][x]) {
            
            let counter = 1;
            for (let i = y + 1; i <= height; i++) {
                if (board[y][x] === board[i][x]) counter++;
                else break;
            }
                if (counter > 2) {
                    for (let i = y; i < counter + y; i++) {
                        board[i][x] = 0;
                    }
                    return true
                }
        }
    }

    return board
}

function gravity(board) {
    for(let y = 0; y < board.length-1; y++) {
        for(let x = 0; x < board[0].length; x++) {
            if(board[y+1][x] === 0) {
                board[y+1][x] = board[y][x];
                board[y][x] = 0;
            }
        }
    }
}

module.exports = riddleSolver;