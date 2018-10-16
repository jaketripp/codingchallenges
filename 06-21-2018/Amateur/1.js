// 1. Longest word
// Write a function that takes in a sentence and returns the length of the longest word.
// input: "I like going out to parties with friends or watching TV."
// output: 8

function findLongestWord(str) {
  return str.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "").length;
}
