function addTwoDigits(n: any): number {
    const numArr = n.toString().split('');


    

    const addFunc = (total, num) => {
        return parseInt(total) + parseInt(num);
    }

    return numArr.reduce(addFunc);

}

 console.log(addTwoDigits(29));