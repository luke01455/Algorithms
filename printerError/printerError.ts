function printerError(s) {
    let countTotal = 0;
    let countFail = 0;

    const strArray = s.split("");
    strArray.forEach(function(el, i) {
        if(el.charCodeAt(0) > 109) {
            countTotal ++;
            countFail ++;
        } else {
            countTotal ++;
        }
    })

    return `"${countTotal}/${countFail}"`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))