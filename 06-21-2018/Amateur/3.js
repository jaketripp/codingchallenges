// 3. Title Case
// Write a function that takes a string and returns a "title case” string
// input: "The QUICK brown fox JuMpS ovER the LAZy dog"
// output: "The Quick Brown Fox Jumps Over The Lazy Dog"

function toTitleCase(string) {
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
