// *============================*
// 1. Summation
// *============================*
function summation(num) {
  var result = 0;
  while (num > 0) {
    result += num;
    num--
  }
  return result
}
console.log(summation(140)); // 9870
console.log(summation(473)); // 112101


// *============================*
// 2. Ain't nobody like raisins in their cookies
// *============================*
function getRidOfThemRaisins(arr) {
  return arr.filter(containsRaisins);
}
// I MEANT to write just 'raisin' but I accidentally wrote 'raisins' in the question
function containsRaisins(str) {
  return !str.toLowerCase().includes("raisin");
}
var raisinArray = ["Chocolate Chip Cookies", "Raisin Trail Mix", "Non-Raisin Cinnamon Buns", "Cous Cous", "Granola bars", "Raisin Scones", "Bagels", "Oatmeal Raisin Cookies", "Raisin Cookie Dough Ice Cream", "Dogs shouldn't eat raisins"];
console.log(getRidOfThemRaisins(raisinArray)); 
// ["Chocolate Chip Cookies", "Cous Cous", "Granola bars", "Bagels"]


// *============================*
// 3. DNA base pair
// *============================*
function dnaBasePair(str) {
  var pair = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  return str.split("").map((char) => {
    return [char, pair[char]]
  })
}
console.log(dnaBasePair("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(dnaBasePair("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]


// *============================*
// 4. Letter modification
// *============================*
function isLetter(character) {
  // [65-90] - uppercase
  // [97-122] - lowercase
  var charCode = character.charCodeAt(0);
  return (charCode > 96 && charCode < 123);
}

function isVowel(character) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(character)
}

function nextLetter(character) {
  var charCode = character.charCodeAt(0);
  var newCharCode = charCode + 1;
  // if character was z, now it's a
  if (newCharCode > 122) {
    newCharCode = 97
  }
  return String.fromCharCode(newCharCode) 
}

function letterMod(str) {
  return str.split("").map((char) => {
    var returnChar = char;
    if (isLetter(char)) {
      returnChar = nextLetter(char);
    }
    if (isVowel(returnChar)) {
      returnChar = returnChar.toUpperCase();
    }
    return returnChar;
  }).join("");
}
console.log(letterMod("*r@lokd 0tsots*")); // "*s@mplE 0UtpUt*"
console.log(letterMod("gzoox gz11nvddm!")); // "hAppy hA11OwEEn!"
console.log(letterMod("$o00jx bnc1mf bg@kkdmfd")); // "$p00ky cOd1ng ch@llEngE"


// *============================*
// 5. Largest palindrome product
// *============================*

// converts the number to a string, then an array, reverses the array, joins the array, and then back into a number
// 102 -> "102" -> ["1", "0", "2"] -> ["2", "0", "1"] -> "201" -> 201
// 102 !== 201
function isPalindrome(num) {
  return parseInt(String(num).split('').reverse().join('')) === num;
}

// by passing as a parameter and calculating the start and end,
// the function is more adaptable to different use cases
function findLargestPalindromecurrentProduct(numberOfDigits) {

  // assuming numberOfDigits === 3
  // start = 100 (10 * 10)
  // end = 1000 (10 * 10 * 10)
  var start = Math.pow(10, numberOfDigits - 1);
  var end = Math.pow(10, numberOfDigits) - 1;

  var largestPalindrome = 0;
  // used to print out the numbers for the largest palindrome product at the end
  var largestPalindromeA = 0;
  var largestPalindromeB = 0;

  // keep track of the number of iterations
  // assuming numberOfDigits === 3
  // iteration count: 42,300
  // worst possible iteration count: 808,201 
  // (999 - 100) * (999 * 100)
  // only 20 times less work, nbd 😉
  var counter = 0;

  var currentProduct;

  // start in reverse order (less iterations)
  // Idea courtesy of Maria Vela from the October 2018 Coding Challenge
  for (a = end; a >= start; a--) {
    // if the (square root of the largestPalindrome) > a,
    // we can exit early
    // assuming numberOfDigits === 3
    // this is because b changes 899 times for every change of a
    // because of this, we test a: 999 b:999 all the way through to a:999 b:100
    // then a:998 b:999 all the way through to a:998 b:100
    // the largest palindrome is 906609
    // the sqrt of that is a little greater than 952
    // because we have tested all the possibilities of b for EVERY a,
    // when a becomes smaller than the sqrt of the largest palindrome we have found
    // we can be sure that we can stop checking immediately, 
    // because a has to be greater than or equal to the sqrt of the largest palindrome
    // to have a resulting product be greater than or equal to the largest palindrome

    if (Math.sqrt(largestPalindrome) > a) {
      break;
    }

    for (b = end; b >= start; b--) {

      counter++;
      currentProduct = a * b;

      // check if the current product is greater than the largestPalindrome FIRST
      if (largestPalindrome < currentProduct) {

        // checking if a number is a palindrome is WAY more expensive than comparing the size of two numbers 
        if (isPalindrome(currentProduct)) {

          console.log(`${a} * ${b} = ${currentProduct}`);
          largestPalindrome = currentProduct;
          largestPalindromeA = a;
          largestPalindromeB = b;

        }
      }

    }
  }

  return `${largestPalindromeA} * ${largestPalindromeB} = ${largestPalindrome} || ${counter} iterations`;

}

findLargestPalindromecurrentProduct(3)