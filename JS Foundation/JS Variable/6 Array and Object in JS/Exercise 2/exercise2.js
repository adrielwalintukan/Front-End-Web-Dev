// Exercise 2: Array and Object in JS
// Name: Walintukan, Adriel Misael


// Array Exercise

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Using forEach()
people.forEach(function(person) {
    console.log(person);
});

// 3. Remove "Greg"
people.shift();
console.log(people); // ["Mary", "Devon", "James"]

// 4. Remove "James"
people.pop();
console.log(people); // ["Mary", "Devon"]

// 5. Add "Matt" to the front
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 6. Add your name to the end
people.push("Adriel");
console.log(people); // ["Matt", "Mary", "Devon", "Adriel"]

// 7. For-loop, stop after "Mary"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break; // keluar dari loop setelah "Mary"
    }
}

// 8. Make a copy (without "Matt" and "Mary")
let copy = people.slice(2);
console.log(copy); // ["Devon", "Adriel"]

// 9. Redefine and use splice
people = ["Matt", "Mary", "Devon", "Adriel"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); 
// ["Matt", "Mary", "Elizabeth", "Artie", "Adriel"]

// 10. Concatenate with "Bob"
let withBob = people.concat("Bob");
console.log(withBob); 
// Final Result: ["Matt", "Mary", "Elizabeth", "Artie", "Adriel", "Bob"]



// Object Exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add "Go"
programming.languages.push("Go");
console.log(programming.languages);

// 2. Change difficulty to 7 (bracket notation)
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Remove "jokes" key
delete programming.jokes;
console.log(programming);

// 4. Add "isFun: true"
programming.isFun = true;
console.log(programming);

// 5. map() with index
programming.languages.map((lang, index) => {
    console.log(`${index} - ${lang}`);
});
