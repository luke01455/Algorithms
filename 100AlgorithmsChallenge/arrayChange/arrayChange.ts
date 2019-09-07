// function arrayChange(inputArray: number[]): number {
 
//     const inputArra = inputArray;
//     let count = 0;
//     for(let i = 1; i < inputArra.length; i++ ) {
//         if(inputArra[i] < inputArra[i-1]) {
//             while(inputArra[i] < inputArra[i-1]) {
//                 inputArra[i]++;
//                 count++;
//             }
//             inputArra[i] ++;
//             count += 1;

            
//     } else if (inputArra[i] > inputArra[i-1]) {
        
//         while(inputArra[i] > inputArra[i-1]) {
//             inputArra[i]--;
//             count++;
//         }
//         console.log(inputArra[i])
//         inputArra[i] += 1;
//         count = count - 1;
//     } else {
//         inputArra[i] += 1;
//         count += 1;
//     }


// }
// return count;
// }
function arrayChange(arr: number[]): number {
 
    let turnsNeeded: number = 0;
 
    for (let i = 1; i < arr.length; i++){
        if (arr[i] <= arr[i - 1]){
            turnsNeeded += (arr[i -1] + 1) - arr[i];
            arr[i] = arr[i - 1] + 1;
        }
    }
    return turnsNeeded;
}
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 4, 3]));
console.log(arrayChange([5, 4, 3]));
console.log(arrayChange([10, 4, 15]));
console.log(arrayChange([9,1,1]));