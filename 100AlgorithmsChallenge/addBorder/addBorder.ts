function addBorder(picture: string[]): string[] {
const newArr = [];

     const addAsterisk = () => {
        const asterisks = [];
        for(let i = 0; i < picture[0].length + 2; i++) {
            asterisks.push('*');
        }
        return asterisks.join("");
    }

    const asts = addAsterisk();

    newArr.unshift(asts);
    for(let i = 0; i < picture.length; i++) {
        newArr.push('*'.concat(picture[i], '*'));
    }
    newArr.push(asts);

    return newArr;

// const lengthOfWall = picture[0].length + 2;

// for(let i = 0; i < lengthOf)
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["httgfjuiopsd", "fgnfghguiopo"]));
