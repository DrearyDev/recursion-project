import {mergeSort} from './mergeSort.js';

console.log('---------------------------------');

const submitBtn = document.querySelector('button');
const input = document.querySelector('form input');
input.value = '';
let unsorted, sorted;

function validateNumbers(numString) {

    numString = numString.replace(/[^0-9,]/gm, '');// remove non-numbers and non-commas

    numString = numString.replace(/,,/gm, '');// remove two or more commas in a row

    numString = numString.replace(/^[,]/gm, '');// remove first character if it is a comma

    numString = numString.replace(/[,]$/g, '');// remove last character if it is a comma

    numString = numString.split(',');

    for (let i in numString) {
        numString[i] = +numString[i];
    };// convert string elements to numbers

    return numString;
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    unsorted = validateNumbers(input.value);
    input.value = '';
    sorted = mergeSort([...unsorted]);



});