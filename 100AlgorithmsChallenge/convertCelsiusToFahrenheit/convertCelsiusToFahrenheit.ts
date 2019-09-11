function celsiusToFahrenheit(celsius: number): number {
    const percent = (9/5)
    return (celsius * percent) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));