// 5. Anagram
// Write a function that takes two strings as input and returns true or false de- pending on whether they are anagrams (contain exactly the same letters). Only lowercase letters will be passed.
// input: "overcast", “overacts”
// output: true
// input: “jimbo”, “jason”
// output: false

function isAnagram(word1, word2) {
  let sortedWord1 = word1.split("").sort().join("");
  let sortedWord2 = word2.split("").sort().join("");
  return sortedWord1 === sortedWord2;
}