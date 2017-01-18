var numberArray = ["", ""];
var numberIndex = 0;
var operator = "";
var result = null

var addNumberToArray = function(number){
    if(result !== null){
        result = null;
        document.querySelector("#display").value = "";
    }
    document.querySelector("#display").value += number;
    numberArray[numberIndex] += number;
}

var addOperatortoArray = function(inputOperator){
    if(result != null){
        numberArray[0] = result;
        result = null;
        numberArray[1] = "";
    }
    numberIndex = 1;
    document.querySelector("#input").value += inputOperator;
    operator = inputOperator;
}

var resetCalculator = function(){
    document.querySelector("#display").value = "";
    numberArray = ["", ""];
    number_index = 0;
}

/*
Operations functions
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