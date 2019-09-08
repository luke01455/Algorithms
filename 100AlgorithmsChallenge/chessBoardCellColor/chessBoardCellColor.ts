function chessBoardCellColor(cell1: string, cell2: string): boolean {

    const board = {
        "A" : 1,
        "B" : 2,
        "C" : 3,
        "D" : 4,
        "E" : 5,
        "F" : 6,
        "G" : 7,
        "H" : 8,
    }
    
    if((parseInt(cell1[1]) + board[cell1[0]]) % 2 === 0 && (parseInt(cell2[1]) + board[cell2[0]]) % 2 === 0 || (parseInt(cell1[1]) + board[cell1[0]]) % 2 !== 0 && (parseInt(cell2[1]) + board[cell1[0]]) % 2 !== 0) {
        return true;
    }
    else { return false}

    
}

/*
function chessBoardCellColor(piece1: any, piece2: any): boolean {
    let board = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 , 'f': 6, 'g': 7, 'h': 8 };
 
    let locationOne = (board[piece1[0]] * piece1[1]) % 2 === 0;
    let locationTwo = (board[piece2[0]] * piece2[1]) % 2 === 0;
 
    return locationOne === locationTwo;
}
*/

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
