/*
EVER URIEL GARCIA
*/

var numberArray = ["", ""];
var numberIndex = 0;
var operator = "";
var result = null;

var addNumberToArray = function(number){
    if(result !== null){
        result = null;
    }
    document.querySelector("#output").value += number;
        numberArray[numberIndex] += number;
}

var addOperatortoArray = function(inputOperator){
    if(result !== null){
        numberArray[0] = result;
        result = null;
        numberArray[1] = "";
    }
    numberIndex = 1;
    document.querySelector("#output").value += inputOperator;
    operator = inputOperator;
}

var resetCalculator = function(){
    document.querySelector("#output").value = "";
    numberArray = ["", ""];
    number_index = 0;
}

/*
Functions of Operations
*/

var addition = function(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        alert("It is not going to work like that");
        return false;
    }
    else {
        return (num1 + num2);
    }
}

var subtraction = function(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        alert("It is not going to work like that");
        return false;
    }
    else {
        return (num1 - num2)
    }
}

var multiplication = function(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        alert("It is not going to work like that");
        return false;
    }
    else {
        num1 * num2;
    }
}

var division = function(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        alert("It is not going to work like that");
        return false;  
    }
    else {
        if(num2 > 0){
            return (num1 / num2)
        }
        else {
            alert("You can not divide by zero")
            return false
        }
    }
}

/*
Functions to Execute Operations
*/

var calculator = function(){
    if(operator === "+") {
        result = addition(numberArray[0], numberArray[1]);
    }
    else if(operator === "-"){
        result = subtraction(numberArray[0], numberArray[1]);
    }
    else if(operator === "*"){
        result = multiplication(numberArray[0], numberArray[1]);
    }
    else if(operator === "/"){
        result = division(numberArray[0], numberArray[1]);
    }
    else {
        alert("Invalid Operator!!!")
    }
}

/*
Results
*/

if(result !== false){
    // document.querySelector("#output").value = result;
    console.log(result)
}
else {
    alert("Error!!!") 
}

