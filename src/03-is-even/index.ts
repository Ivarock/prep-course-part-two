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

function isEven(n: number) {
    // Using bitwise & operator to see if least significant bit is 0: (0 - even number(true), 1 - odd number(false))
    return (n & 1) === 0;
}

export { isEven };
