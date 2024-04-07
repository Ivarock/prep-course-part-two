/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
        // Create empty string variable for holding longest word so far
        let longest = '';
        // Break passed ssentence in separate words
        const words = sen.split(' ');
        for (const word of words) {
            // Remove unwanted characters using regular expression
            const cleanedWord = word.replace(/[^\w\s]/gi, '');
            // Check if cleaned word is longer than current longest word and replace it
            if (cleanedWord.length > longest.length) {
                longest = cleanedWord;
            }
        }
        return longest;
    };


export { longestWord };
