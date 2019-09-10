function confirmEnding(str: string, target: string) {
   let strLength = str.length;
   let tarLength = target.length;

   if(str.substring(strLength-tarLength) === target) {
       return true;
   }
   else return false;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("god is my owner", "ner"));