/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string): boolean {
  // Split the string into array of characters, reverse it and join it back together.
  const reversedStr = str.split("").reverse().join("");
  // Check if given string and reversed string are the same, returns boolean.
  return str === reversedStr;
}

export { palindrome };

// 1.
