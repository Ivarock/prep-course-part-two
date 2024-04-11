/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const evenDigits = [0, 2, 4, 6, 8];

function isEven(n: number): boolean {
  const nAsString = n.toString();
  const parts = nAsString.split(".");
  const wholeNumAsString = parts[0];
  const lastDigit = Number(wholeNumAsString[wholeNumAsString.length - 1]);
  return evenDigits.includes(lastDigit);
  // Using bitwise & operator to see if least significant bit is 0: (0 - even number(true), 1 - odd number(false))
  //return (n & 1) === 0;
}

export { isEven };
