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
function isPalindrome(num) {
  return parseInt(String(num).split('').reverse().join('')) === num;
}
function findLargestPalindromeProduct() {
  var numberOfDigits = 3;
  var start = Math.pow(10, numberOfDigits - 1);
  var end = Math.pow(10, numberOfDigits);
  var largestPalindrome = 0;
  var product;
  var largestPalindromeA = 0;
  var largestPalindromeB = 0;
  for (a = start; a < end; a++) {
    for (b = start; b < end; b++) {
      product = a * b;
      if (largestPalindrome < product) {
        if (isPalindrome(product)) {
          // console.log(`${a} * ${b} = ${product}`);
          largestPalindrome = product;
          largestPalindromeA = a;
          largestPalindromeB = b;
        }
      }
    }
  }

  return `${largestPalindromeA} * ${largestPalindromeB} = ${largestPalindrome}`;
}
console.log(findLargestPalindromeProduct());

