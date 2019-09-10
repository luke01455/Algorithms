function toWeirdCase(string){
    const newArray = string.split("").toString();
    console.log(newArray)
    console.log(newArray.length)
    const noSpArr = newArray.replace(/,/g, "")

    console.log(noSpArr)
    const newArr3 = [];
    for(let i = 0; i < newArray.length; i++) {
        if(i % 2 === 0 && noSpArr[i] !== undefined) {
            newArr3.push(noSpArr[i].toUpperCase());
        } else if (noSpArr[i] !== undefined){
            newArr3.push(noSpArr[i]);
        }
    }
    console.log(newArr3)
  }

  //console.log(toWeirdCase('This is a test'))
  //console.log(toWeirdCase('This'))
  //console.log(toWeirdCase('is'))