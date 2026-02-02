console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    }else console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    }else{
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
    }
}
//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 1;
//do {
//    if (i % 2 !== 0) {
//        console.log(i);
        
//    } i++
//} while (i <= 100);


do{
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    else {
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
    } i++
} while (i <= 100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i <= n; i++) {
    if (i == value){
        console.log("Found Value");
        break;
    }else{
        console.log("Did not find Value");
    }
}

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(let i = start; i <= num; i++) {
    if (i == fizzDivisor && i == buzzDivisor) {
        console.log("FIZZBUZZ");
    }else{
        if (i == buzzDivisor) {
            console.log("BUZZ");
        }
        if (i == fizzDivisor) {
            console.log("FIZZ");
        }
    }
}
