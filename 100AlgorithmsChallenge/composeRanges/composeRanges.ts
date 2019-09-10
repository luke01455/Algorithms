function composeRanges(arr: number[]): string[] {
 
    let ranges: any[] = [], subRanges: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1]) {
            subRanges.push(arr[i]);
        } else {
            subRanges.push(arr[i]);
            ranges.push(subRanges);
            subRanges = [];
        }
    }
    console.log(ranges)
    console.log(subRanges)
 
    for (let i = 0; i < ranges.length; i++) {
        let start: number = ranges[i][0], end: number = ranges[i][ranges[i].length - 1];
        ranges[i] = (ranges[i].length > 1) ? `${start} -> ${end}` : `${start}`;
    }
    
    return ranges;
        
}
 
console.log(composeRanges([-1,0,1,2,6,7,9]));
//console.log(composeRanges([0,1,2,3,5,6,7,8,10,12,14,15,16,17,18,20]));