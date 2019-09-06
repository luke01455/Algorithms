function alphabeticShift(inputString: string): string {
   const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   const origArr = inputString.split("");
    const newArr = [];
   origArr.forEach((letter) => {
       for(let i = 0; i < alphabet.length; i++) {
           if (letter === alphabet[i] && letter !== 'z') {
            newArr.push(alphabet[i+1]);
            break;
           }
           else if (letter === alphabet[alphabet.length - 1]){
               newArr.push('a');
               break;
           }
       }
   })

   const ans = newArr.join();

   return ans;
}

console.log(alphabeticShift('crazy'));