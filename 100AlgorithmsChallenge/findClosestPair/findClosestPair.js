function findClosestPair(number, sum) {

const correctSums = [];
   for(let i = 0; i < number.length; i++) {
       for(let j = 0; j < number.length; j++) {
           if (number[i] + number[j] === sum) {
               var absNum = Math.abs(number.indexOf(number[i]) - number.indexOf(number[j]))
               correctSums.push(absNum)
           }
       }
   }

   if(correctSums.length){
    return Math.min(...correctSums)
   } else {
    return -1
   } 
   
}

 console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
 console.log(findClosestPair([2, 3, 7], 8));