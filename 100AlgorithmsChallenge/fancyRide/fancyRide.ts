function fancyRide(l, fares) {
    let winner = 0

    for(let i = 0; i < fares.length; i++){
        if(fares[i] * 20 < l && fares[i] >= winner) {
            winner = fares[i]
        }
    }

    return winner
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));