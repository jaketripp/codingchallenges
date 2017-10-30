// if sum is in range 50...80 return 65
// else return 80
function roundSum(a, b){
	var sum = a + b;
	if (sum >= 50 && sum <= 80) {
		return 65;
	} else {
		return 80;
	}
}