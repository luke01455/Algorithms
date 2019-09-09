function reverseWords(str) {
    const wordArray =  str.split(" ");
    const newArray = [];
    console.log(wordArray)
    for (let i = 0; i < wordArray.length; i++) {
        newArray.push(wordArray[i].split("").reverse().join(""));
    }

    console.log(newArray)

    const ansArray = newArray.toString();
    console.log(ansArray)
    const finalAns = ansArray.replace(/,/g, " ");
    return finalAns;
  }

  //console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
  //.log(reverseWords('apple'));
  //console.log(reverseWords('a b c d'));
  //console.log(reverseWords('double  spaced  words'));