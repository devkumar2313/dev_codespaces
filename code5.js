

Your Question:Loop (for each) over an array in JavaScript
Your Answer:-

You can use the forEach() method to loop over an array in JavaScript. The forEach() method takes a callback function as an argument, which is executed once for each element in the array. 

The callback function takes three arguments: 

1. The current element in the array 
2. The index of the current element in the array 
3. The array object being traversed

Example: 

const arr = [1, 2, 3, 4, 5];

arr.forEach(function(element, index, array) {
  console.log(element, index, array);
});

// Output: 
// 1 0 [1, 2, 3, 4, 5]
// 2 1 [1, 2, 3, 4, 5]
// 3 2 [1, 2, 3, 4, 5]
// 4 3 [1, 2, 3, 4, 5]
// 5 4 [1, 2, 3, 4, 5]

Your Question:How can I validate an email address in JavaScript?
Your Answer:-

You can use a regular expression to validate an email address in JavaScript. 

Below is an example of a regular expression that can be used to validate an email address:

let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// To use the regular expression:
let email = "example@example.com";
if (re.test(email)) {
  console.log("Valid email address!");
} else {
  console.log("Invalid email address!");
}

Your Question:How do I replace all occurrences of a string in JavaScript?
Your Answer:-

You can use the String.prototype.replace() method to replace all occurrences of a string in JavaScript. This method takes two arguments: the string to be replaced and the string to replace it with.

For example, if you have the following string:

let myString = 'Hello World!'

You can use the replace() method to replace the word "World" with "Universe":

let newString = myString.replace('World', 'Universe');

console.log(newString); // 'Hello Universe!'