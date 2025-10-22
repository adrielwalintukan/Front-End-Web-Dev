// IIFE & Callback Function

// 1. IIFE (Immediately Invoked Function Expression)
//    self-executing anonymous function

// standard IIFE
(function (){
    // statements
})();

// Contoh:
(function (){
    console.log("Hello World");
})();

// With parameter
(function (fullName){
    console.log("Hello " + fullName);
})("John Doe");

// With return value
let output = (function (fullName){
    return "Hello " + fullName;
})("John");

console.log(output);

// 2. Callback Function
//    function passed into another function as an argument

// Contoh:
function greetings(callback){
    callback("John Doe");
}
  // Function as args must be a anonymous function
greetings(function (){
    console.log("Hello Callback");
});

// Callback function with parameter
greetings(function (FullName){
    console.log("Hello " + FullName);
});


// Callback function with return value
function greetings(callback){
    let output = callback("John Doe");
    return output;
}

let output2 = greetings(function (FullName){
    return "Hello, Hello " + FullName;
});

console.log(output2);