/*
Task 1
Write a JavaScript for loop that will iterate from 1 to 20. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

// for(i=0; i<=20; i++) {
//     if(i % 2 == 0) {
//         console.log("Even numbers:"+" "+ i);
//     };
// };

// for(i=0; i<=20; i++) {
//     if(i % 2 !== 0) {
//         console.log("Odd numbers:"+" "+ i);
//     };
// };

/*
Task 2
Create a function called sum() which takes a limit argument. The function should return the sum of all the multiples of 3 and 5 between 0 and the limit.
*/

function sum() {
    for(i=3; i<=30; i++) {
        if(i % 3 == 0) {
            console.log("Multiples of 3:" +" "+ i);
        };
    };


    for(i=5; i<=30; i++) {
        if(i % 5 == 0) {
            console.log("Multiple of 5:" +" "+i);
        };
    };
};
sum(console.log);