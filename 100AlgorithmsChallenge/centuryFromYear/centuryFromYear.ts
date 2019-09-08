function centuryFromYear(year: number): number {
 
// return Math.floor((year - 1) / 100) + 1 ;
return Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1650));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1701));
console.log(centuryFromYear(1702));
console.log(centuryFromYear(1799));
console.log(centuryFromYear(1800));
console.log(centuryFromYear(1801));