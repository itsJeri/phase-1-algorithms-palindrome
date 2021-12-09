function isPalindrome(word) {
  // Write your algorithm here
  const original = word
  const reverse = word.split('').reverse().join('')
  if (original === reverse) {
    return true
  } else {return false}
}

/* 
  Add your pseudocode here
  function isPalindrome should receive a string as an argument
  returns true if reversed word matches the original word
  returns false if not

  assign var to original word
  assign var to reversed word
    .split to separate individual characters, .reverse them, .join characters again
*/

/*
  Add written explanation of your solution here
  This function needs to check if the original input string is equal to a reversed version of itself. I can reverse the word by splitting it up into individual characters, reversing those characters, then joining the characters back into one word again. I can then check if the reversed word is strictly equivalent to the original, and return 'true' or 'false'.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
