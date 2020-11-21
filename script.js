function add(num1, num2){
    var result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    var result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    var result = num1 * num2
    return result;
}

function divide(num1, num2){
    var result = num1 / num2;
    return result;
}

function operate(num1, num2, operator){
    if (operator == '+'){
        result = add(num1, num2);
    } else if (operator == '-'){
        result = subtract(num1, num2);
    } else if (operator == '*'){
        result = multiply(num1, num2);
    } else if (operator == '/'){
        result = divide(num1, num2);
    }
    return result
}

const numbers = document.querySelectorAll('.number');
var calculator = document.getElementById('calculator');
var value = '';
var num1 = 0;
var num2 = 0;
var operator_value = '';
numbers.forEach(number =>{
    number.onclick = function () {
        value += number.id
        calculator.value = value;
    }
})

const clear_button = document.getElementById('clear');
clear_button.onclick = function () {
    calculator.value = '';
    value = '';
    num1 = 0;
    num2 = 0;
    operator = '';
}

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.onclick = function () {
        if (num1 != 0){
            num2 = Number(calculator.value)
            num1 = operate(num1, num2, operator_value);
            num2 = 0;
            console.log('Two values have already been entered')
            console.log(num1)
            console.log(num2)
        } else{
            num1 = Number(calculator.value);
            console.log('Only the first value has been entered.')
            console.log(num1)
            console.log(num2)
        }
        value = '';
        operator_value = operator.id;
    }
})

const equals = document.querySelector('.equals');
equals.onclick = function () {
    num2 = Number(calculator.value);
    value = ''
    result = operate(num1, num2, operator_value);
    if (result == 'NaN'){
        result = 'Syntax Error'
    }
    calculator.value = result;
}