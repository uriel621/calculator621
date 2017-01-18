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
    document.queryselector("#input").value += inputOperator;
    operator = inputOperator;
}

var resetCalculator = function(){
    document.querySelector("#display").value = "";
    numberArray = ["", ""];
    number_index = 0;
}