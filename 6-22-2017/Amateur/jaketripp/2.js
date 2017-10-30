function greatestAndLeast(arr) {
	var max = arr.reduce((a, b) => Math.max(a, b));
	var min = arr.reduce((a, b) => Math.min(a, b));
	return `${min}, ${max}`;
}

greatestAndLeast([12,34,56,1]);
greatestAndLeast([-12,-34,0,4,-1]);