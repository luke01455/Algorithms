function bishopAndPawn(bishop, pawn): boolean {
const bishopLoc = bishop.split('');
const pawnLoc = pawn.split('');

bishopLoc[0] = bishopLoc[0].charCodeAt(0);
pawnLoc[0] = pawnLoc[0].charCodeAt(0);

var difference = Math.abs(bishopLoc[0] - pawnLoc[0]);

if (difference === Math.abs(bishopLoc[1] - pawnLoc[1])) {
    return true;
} else {
    return false;
}
}

console.log(bishopAndPawn('a1', 'c3'));

console.log(bishopAndPawn('B2', 'D4'));
console.log(bishopAndPawn('D6', 'G3'));
console.log(bishopAndPawn('F5', 'C8')); 
console.log(bishopAndPawn('H6', 'H7'));