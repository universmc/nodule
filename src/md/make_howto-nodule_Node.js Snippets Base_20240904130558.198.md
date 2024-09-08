```javascript
// Snippets Base.js

// 1.  Function to print a greeting message
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

// 2. Function to calculate the sum of two numbers
const sum = (a, b) => {
  return a + b;
};

// 3. Function to check if a number is even
const isEven = (number) => {
  return number % 2 === 0;
};

// 4. Function to reverse a string
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// 5. Function to check if a string is a palindrome
const isPalindrome = (str) => {
  return str === reverseString(str);
};

// Example usage
greet('World'); // Outputs: Hello, World!

const result = sum(5, 3);
console.log(result); // Outputs: 8

console.log(isEven(4)); // Outputs: true

console.log(reverseString('hello')); // Outputs: olleh

console.log(isPalindrome('racecar')); // Outputs: true



```

**Explanation:**

* **Snippets:** These are small, reusable blocks of code that perform specific tasks. 
* **Base.js:** This file name suggests a collection of fundamental code snippets.

**The Snippets:**

1.  **`greet(name)`:**  Takes a name as input and prints a greeting message.
2.  **`sum(a, b)`:** Takes two numbers as input and returns their sum.
3.  **`isEven(number)`:** Takes a number and returns `true` if it's even, `false` otherwise.
4.  **`reverseString(str)`:** Takes a string and returns its reversed version.
5.  **`isPalindrome(str)`:** Takes a string and returns `true` if it's a palindrome (reads the same backward as forward), `false` otherwise.

**How to Use:**

* **Copy and paste:** You can copy these snippets directly into your Node.js projects.
* **Modify:**  Adapt them to your specific needs by changing the parameters or the logic inside the functions.
* **Organize:**  Create a file called `base.js` or similar and store these snippets for easy reuse in your projects.



Let me know if you'd like more examples or have any specific tasks in mind!
