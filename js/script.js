$(document).ready(function(){
	var input_array =[""];
	var input_index = 0;

	$("button").on("click", function(){
		var val = $(this).text();

	})

	apply_click_handlers()

	function apply_click_handlers(){
		$(".number").click(input_number)
		$(".operator").click(input_operator)
		$("#equal_button").click(calculate)
		$(".clear").click(clear)
	}

	function input_number(){
		console.log($(this).text());
		input_array[input_index] += $(this).text();
		$("#output").empty()
		$("#output").append(input_array)

		console.log(input_array)
	}

	function input_operator(){
		if(input_array.length === 3){
			calculate()
		}

		input_index++;
		input_array[input_index] = $(this).text()
		console.log(input_array)
		input_index++;
		input_array[input_index] = "";
	}	

	function calculate(){
		var operator = input_array[1];
		var num1 = parseFloat(input_array[0]);
		var num2 = parseFloat(input_array[2]);
		var total = 0;

		if(operator === "+"){
        	total = num1 + num2;
        	input_array = [""];
        	input_array[0] = total;
        	$("#output").empty();
        	$("#output").append(total);
        	input_index = 0;
        	console.log(total)
    	}
    	else if(operator === "-"){
        	total = num1 - num2;
        	input_array = [""];
        	input_array[0] = total;
        	$("#output").empty();
        	$("#output").append(total)
        	input_index = 0;
        	console.log(total)
    	}
    	else if(operator === "x"){
        	total = num1 * num2;
        	input_array = [""]
        	input_array[0] = total;
        	$("#output").empty();
        	$("#output").append(total)
        	input_index = 0
        	console.log(total)
    	}
    	else if(operator === "/"){
        	total = num1 / num2;
        	input_array = [""];
        	input_array[0] = total;
        	$("#output").empty();
        	$("#output").append(total)
        	input_index = 0;
        	console.log(total)
    	}
    	else {
    		total = 0;
    	}
	}
	function clear (){
		$("#output").empty();
		input_array = [""];
		input_index = 0
	}
})