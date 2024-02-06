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

console.log('-------------------------------------------------------------------------------------');
/*
using recursion, do the same thing.
*/

function fibsRecursion(n) {

    if (n <= 2) {
        return [0, 1];
    };

    const arr = fibsRecursion(n-1);

    arr.push(arr[arr.length-1] + arr[arr.length-2]);

    return arr;
};
console.log(fibsRecursion(8));// [0, 1, 1, 2, 3, 5, 8, 13]

/*------------------------------------------------------------
    Whats Happening in this Recursive Function

fibsRecursion(8)
    arr = fibsRecursion(7)
        arr = fibsRecursion(6)
            arr = fibsRecursion(5)
                arr = fibsRecursion(4)
                    arr = fibsRecursion(3)
                        arr = fibsRecursion(2)
                            arr = fibsRecursion(1)
                                return [0, 1]
                        return [0, 1, 1]
                    return [0, 1, 1, 2]
                return [0, 1, 1, 2, 3]
            return [0, 1, 1, 2, 3, 5]
        return [0, 1, 1, 2, 3, 5, 8]
    return [0, 1, 1, 2, 3, 5, 8, 13]

this function sets an array to the function called with the number passed minus 1.
this happens all the way until we reach fibsRecursion(1) which returns [0, 1] before
it ever calls fibsRecursion again. now that we have an array, we can do the math that
pushes a new number to the array. this math is adding the two previous elements to get the
new element (which is how you calculate the fibonacci sequence). It then returns the array
it made and does this over and over until we are back at our first call, but with the created
array where we can add the two previous elements to get the last element.

this function returns the fibonacci sequence as an array of length 'n' where n is what you pass in.

------------------------------------------------------------*/