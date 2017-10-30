// greatest common divisor
var gcd = (a,b) => b ? gcd(b, a % b) : a;

// want the first param to be bigger
// if it is
	// run again with the second param passed as first
	// and first % second as the second
	//  (9, 3) => (3,0)
// if not, reverse the params
	// (3,9) => (9,3)


// First Param: 462
// Second Param: 910
// First Param: 910
// Second Param: 462
// First Param: 462
// Second Param: 448
// First Param: 448
// Second Param: 14
// First Param: 14
// Second Param: 0


gcd(12, 13);
gcd(9, 3);