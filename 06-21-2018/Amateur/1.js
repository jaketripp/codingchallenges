// 1. Longest word
function findLongestWord(str) {
  return str.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "").length;
}
