'use strict';
//////////// fib stuff happens in the console ////////////

/*
using iteration, write a function which takes a number and returns an array containing that many
numbers from the Fibonacci sequence.

example:
    fibs(8) should return => [0, 1, 1, 2, 3, 5, 8, 13]
*/

function fibsIteration(n) {
    let arr = [0, 1];


    for (let i = 0; i < (n-2); i++) {
        arr.push(arr[i] + arr[i + 1]);
    };

    return arr;
};
console.log(fibsIteration(8));// [0, 1, 1, 2, 3, 5, 8, 13]