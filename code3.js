

Your Question:How to check whether a string contains a substring in JavaScript?
Your Answer:-

You can check whether a string contains a substring in JavaScript using the includes() method.

Example:

let str = "Hello World";
let substring = "World";

// Check if str contains substring
let result = str.includes(substring);

// Output: true
console.log(result);

Your Question:How do I remove a property from a JavaScript object?
Your Answer:-

You can remove a property from a JavaScript object using the delete operator. For example:

let person = {
  name: 'John',
  age: 30
};

delete person.age;

console.log(person); // { name: 'John' }

Your Question:How do I return the response from an asynchronous call?
Your Answer:-

The best way to return the response from an asynchronous call is to use Promises. Promises are a way to handle asynchronous operations in JavaScript and allow you to write code that is more readable and easier to debug.

For example, if you are making an API call to a server and want to return the response from the API call, you can use Promises to do this.

// Create a new Promise
let promise = new Promise((resolve, reject) => {
  // Make the API call
  fetch('https://example.com/api/user')
    .then(response => {
      // Resolve the Promise with the response data
      resolve(response.json());
    })
    .catch(error => {
      // Reject the Promise with the error
      reject(error);
    });
});

// Return the Promise
return promise;