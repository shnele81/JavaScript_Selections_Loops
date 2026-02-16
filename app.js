console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ`)
    }else if (i % 3 === 0) {
        console.log(`${i} FIZZ`)
    }else if (i % 5 === 0) {
        console.log(`${i} BUZZ`)
    }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 1;

while (i <= 100){
   if (i % 2 !== 0) {
       console.log(i)
    } i++
} 

let j = 1;
do {
    if (j % 2 !== 0) {
        console.log(j)
        
    } j++
} while (j <= 100);

let x = 1
do{
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(`${x} FIZZBUZZ`)
    }else if (x % 3 === 0) {
        console.log(`${x} FIZZ`)
    }else if (x % 5 === 0) {
        console.log(`${x} BUZZ`)
    } x++
} while (x <= 100);

let y = 1
while (y <= 100) {
    if (y % 3 === 0 && y % 5 === 0) {
        console.log(`${y} FIZZBUZZ`)
    } else if (y % 3 === 0) {
        console.log(`${y} FIZZ`)
    } else if (y % 5 === 0) {
        console.log(`${y} BUZZ`)
    }y++
}

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;
for (let i = 1; i <= n; i++) {
    if (i === value) {
        found = true;
        console.log("Found Value");
        break;
    }
}
if (!found){
    console.log("Value not found");
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
for(; start <= end; start++) {
    if (start % fizzDivisor === 0 && start % buzzDivisor === 0) {
        console.log(`${start} FIZZBUZZ`);
    }else if (start % buzzDivisor === 0) {
        console.log(`${start} BUZZ`);
    }else if (start % fizzDivisor === 0) {
        console.log(`${start} FIZZ`);
    }
}
