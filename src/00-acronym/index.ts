/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    // Extract letters from input using regular expression
    const lettersOnly = input.match(/[a-zA-Z']+/g) || [];
    // Extract first letters from words and capitalize them
    const acronym = lettersOnly.map(word => word.charAt(0).toUpperCase());
    // Join letters to form acronym
    return acronym.join('');
}

export { parse };
