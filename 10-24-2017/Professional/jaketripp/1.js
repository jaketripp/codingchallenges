// multiply without *
function multiply(a,b){
	var aCopy = Math.abs(a);
	var bCopy = Math.abs(b);
	var result = 0;
	var neg = true;

	if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
		neg = false;
	}
	
	while (aCopy > 0) {
		result += bCopy;
		aCopy--;
	}

	return neg === false ? result : (result - result - result);
}
