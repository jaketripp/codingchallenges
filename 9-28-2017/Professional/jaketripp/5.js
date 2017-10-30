// must be a function for each number from 0 ('zero') to 9 ('nine')
// must be function for each math operation: plus, minus, times, dividedBy
// one operation and two numbers
// most outer function is left operand, inner function represents right operand

// eight(minus(nine())) = -1
// three(times(four())) = 12

var operator;

function applyOperator(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);

	if (operator === '/') {
		return num1 / num2;
	} else if (operator === '+') {
		return num1 + num2;
	} else if (operator === '-') {
		return num1 - num2;
	} else if (operator === '*') {
		return num1 * num2;
	}
}

function genericNumber(callback, num) {
	if (callback !== undefined) {
		return applyOperator(num, callback);
	} else {
		return num;
	}
}

var zero = (callback) => genericNumber(callback, 0);

var one = (callback) => genericNumber(callback, 1);

var two = (callback) => genericNumber(callback, 2);

var three = (callback) => genericNumber(callback, 3);

var four = (callback) => genericNumber(callback, 4);

var five = (callback) => genericNumber(callback, 5);

var six = (callback) => genericNumber(callback, 6);

var seven = (callback) => genericNumber(callback, 7);

var eight = (callback) => genericNumber(callback, 8);

var nine = (callback) => genericNumber(callback, 9);

function plus(a) {
	operator = '+';
	return a;
}

var minus = function(a) {
	operator = '-';
	return a;
};

var times = function(a) {
	operator = '*';
	return a;
};

var dividedBy = function(a) {
	operator = '/';
	return a;
};