// count the factorials in the inclusive interval

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}		
}

function countFactorials(low, high){
	var count = 0;
	var x = 1;

	// find first factorialized number, x, greater than low
	while (factorial(x) < low) {
		x++;
	}

	// increment the count while factorial(x) is less than or equal to high
	while (factorial(x) <= high) {
		count++;
		x++;
	}	

	return count;
}