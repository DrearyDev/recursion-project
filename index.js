import {mergeSort} from './mergeSort.js';

const submitBtn = document.querySelector('button');
const input = document.querySelector('form input');
const unsortedText = document.querySelector('.unsorted');
const sortedText = document.querySelector('.sorted');

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

function displayInfo(unsorted, sorted) {
    unsortedText.innerHTML = '';
    sortedText.innerHTML = '';

    let unsortedHeader = document.createElement('p');
    unsortedHeader.innerText = 'Unsorted Numbers:';
    let unsortedNumbers = document.createElement('p');
    unsortedNumbers.innerText = `[ ${unsorted} ]`;

    let sortedHeader = document.createElement('p');
    sortedHeader.innerText = 'Sorted Numbers:';
    let sortedNumbers = document.createElement('p');
    sortedNumbers.innerText = `[ ${sorted} ]`;



    unsortedText.appendChild(unsortedHeader);
    unsortedText.appendChild(unsortedNumbers);
    sortedText.appendChild(sortedHeader);
    sortedText.appendChild(sortedNumbers);
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    unsorted = validateNumbers(input.value);
    input.value = '';
    sorted = mergeSort([...unsorted]);

    displayInfo(unsorted, sorted);
});