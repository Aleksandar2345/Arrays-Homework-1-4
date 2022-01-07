
console.log('Homework 1');
// ----------------------- Homework 1 -------------------------

// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"


let arrayOfStrings = ['Hello', 'there', 'students', 'of', 'SEDC', '!']

function sayHello() {
    let result = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        result = result.concat(arrayOfStrings[i] + ' ');
    }
    return result;
}

console.log(sayHello(arrayOfStrings));

console.log('Homework 2');

// ----------------------- Homework 2 -------------------------

// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.



for(let i = 1; i < 20; i++) {
    if (i % 2 == 0) {
    console.log(`\n${i}`);
} else if(i) {
    console.log(` ${i}`);
}
}

// Tuka imam prasanje. Koja druga sintaksa bi mozel da ja iskoristam za da ne moram da ja koristam if else?



// ----------------------- Homework 3 -------------------------
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it

console.log('Homework 3');

myArray = [3, 5, 6, 8, 11, 'bla', "tggg"];

function minAndMax() {
    let min = Infinity;
    let max = -Infinity;

    for(let number of myArray){
    if(number > max){
        max = number;
    }
    if(number < min){
        min = number;
    }
    }
    let result = min + max;
    return result;
}

console.log(minAndMax(myArray));

console.log('Homework 4');
// ----------------------- Homework 4 -------------------------

// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

arrayFirstName = ["Bob", "Jill"];
arrayLastName = ["Gregory", "Wurtz"];

function mergeFirstAndLastName() {
           
    let newMergedArray = arrayFirstName.map((e, i) => e + ' ' + arrayLastName[i]);
    
    for (var i = 0; i < newMergedArray.length; i++){
    console.log (i + 1 + '. ' + newMergedArray[i]);
    }
    
}

mergeFirstAndLastName(arrayFirstName,arrayLastName);
