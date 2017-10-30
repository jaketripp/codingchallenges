function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function handler(){
	$('#multiply').on('click', function(){
		var num1 = $('#first').val();
		var num2 = $('#second').val();
		var result = multiply(num1, num2);
		$('#output').text('Output goes here: ' + result);
	});

	$('#divide').on('click', function(){
		var num1 = $('#first').val();
		var num2 = $('#second').val();
		var result = divide(num1, num2);
		$('#output').text('Output goes here: ' + result);
	});
}

handler();