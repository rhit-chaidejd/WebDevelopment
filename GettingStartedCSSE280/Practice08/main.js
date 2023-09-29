function main() {
    function multiply(x, y) {
        return x * y;
    }
    console.log(`Q1: ${multiply(7, 9)}`);


    function isEven(num) {
        return (num % 2 == 0)
    }
    console.log(`Q2: ${isEven(8)}`);


    let difference = function subtract(a, b) {
        return a - b;
    }
    console.log(`Q3: ${difference(10, 6)}`);


    var greeting = function greeting(name) {return `Hello ${name}!`}
    console.log(`Q4: ${greeting("Johnny")}`);

    function calculate(x, y) {
        var theSquare = function square(x, y) {
            return (x + y) ** 2;
        }
        return theSquare(x, y);
    }
    console.log(`Q5: ${calculate(10, 2)}`);

    function average(num1, num2, num3) {
        return (num1 + num2 + num3) / 3;
    }
    console.log(`Q6: ${average(5, 6, 7)}`);

    multiply = (a, b) => a * b;
    console.log(`Q7: ${multiply(8, 9)}`);

    greeting = (name) => `Hello ${name}!`
    console.log(`Q8: ${greeting("Olga")}`);

    square = (x) => x * x;
    console.log(`Q9: ${square(7)}`)

    isEven = (num) => num % 2 == 0;
    console.log(`Q10: ${isEven(9)}`);

    findMax = (numbers) => Math.max(numbers);
    console.log(`Q11: ${findMax(10)}`);

    addTwoNumbers = (a, b) =>  a + b;
    console.log(`Q12: ${addTwoNumbers(10, 5)}`);
 

}
main();