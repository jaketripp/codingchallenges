// take a number and return true if a palindrome and false if not

function isPalindrome(num) {
	var str = (num).toString();
	return str.split('').reverse().join() === str;
}