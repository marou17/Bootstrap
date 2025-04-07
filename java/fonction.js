// ----- String Manipulation Functions -----

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // ----- Array Functions -----
  
  // Find Maximum
  function findMaximum(arr) {
    return Math.max(...arr);
  }
  
  // Find Minimum
  function findMinimum(arr) {
    return Math.min(...arr);
  }
  
  // Sum of Array
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Filter Array (example: even numbers)
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // ----- Mathematical Functions -----
  
  // Factorial
  function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Fibonacci Sequence
  function fibonacci(n) {
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }
    return sequence;
  }