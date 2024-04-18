/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  // Array to store elements of stack
  private elements: number[] = [];

  // Method to add elements on top of stack
  push(num: number) {
    this.elements.push(num);
  }
  // Method to remove and return the top element of the stack
  pop() {
    return this.elements.pop();
  }
  // Method to return last element of stack, without removing it
  peek() {
    return this.elements[this.elements.length - 1];
  }
}

export { Stack };
