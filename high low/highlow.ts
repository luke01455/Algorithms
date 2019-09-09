function highAndLow(numbers){
    const newArr = numbers.split(" ");

    let highest = newArr[2];
    let lowest = newArr[0];

    for(let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= highest) {
      highest = parseInt(newArr[i]);
    }
    if (newArr[i] <= lowest) {
    lowest = newArr[i]
    }
  }

  return highest.toString() + ' ' + lowest.toString();
}

  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));