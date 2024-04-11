/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(str: string): number {
  //Using regEx to match vowels in string and save that string in a variable.
  let vowelCount = str.match(/[aeiuo]/gi);
  //Return the length of string with matched vowels, return 0 if there's none
  return vowelCount === null ? 0 : vowelCount.length;
}

export { vowels };
