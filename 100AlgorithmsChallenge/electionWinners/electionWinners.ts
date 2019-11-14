function electionsWinners(votes: number[], k: number): number {
 let currentWinner = 0;
 let count = 0;

 for(let i = 0; i < votes.length; i++) {
     if (i >= currentWinner) {
        currentWinner = votes[i];
     }
 }
console.log(currentWinner)
 let minVotesNeeded = currentWinner - k;
 console.log(minVotesNeeded)

 for(let i = 0; i < votes.length; i++) {
     if (i >= minVotesNeeded) {
         count++
     }
 }

 return count;

}

console.log(electionsWinners([2, 3, 5, 2], 3)); // 2
console.log(electionsWinners([2, 5, 5, 1], 3)); // 2
console.log(electionsWinners([1, 2, 3, 4], 3)); // 3
console.log(electionsWinners([2, 2], 0)); // 0