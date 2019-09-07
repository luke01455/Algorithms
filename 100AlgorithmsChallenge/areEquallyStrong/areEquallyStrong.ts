function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
let mStrong = 0;
let fStrong = 0;
let mWeak = 0;
let fWeak= 0;

if (yourRight >= yourLeft) {
    mStrong = yourRight;
    mWeak = yourLeft;
} else {
    mStrong = yourLeft;
    mWeak = yourRight;
}

if (friendsRight >= friendsLeft) {
    fStrong = friendsRight;
    fWeak = friendsLeft;
} else {
    fStrong = friendsLeft;
    fWeak = friendsRight;
}

if (mStrong === fStrong && mWeak === fWeak) {
    return true;
} else {
    return false;
}
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
