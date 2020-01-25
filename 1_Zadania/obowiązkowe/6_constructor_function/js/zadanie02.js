let Calculator = function() {
    this.history = []
};

Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);

    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    let result = num1 * num2;
    this.history.push(`multiplied ${num1} to ${num2} got ${result}`);

    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    let result = num1 - num2;
    this.history.push(`substracted ${num1} to ${num2} got ${result}`);

    return result;
};

Calculator.prototype.devide = function (num1, num2) {
    if (num2 === 0) {
        this.history.push(`Cant devide by ${num2}`);

        return null;
    }

    let result = num1 / num2;
    this.history.push(`devided ${num1} to ${num2} got ${result}`);

    return result;
};

Calculator.prototype.printOperations = function() {
    console.log(this.history);
};

Calculator.prototype.clearOperations = function() {
    this.history = [];
};


let calc = new Calculator();
console.log(calc.add(5, 5));
console.log(calc.multiply(5, 5));
console.log(calc.subtract(5, 5));
console.log(calc.devide(5, 0));
console.log(calc.devide(5, 5));
calc.printOperations();
calc.clearOperations();
calc.printOperations();
