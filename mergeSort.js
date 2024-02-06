'use strict';

/*
create a function that takes an array of numbers and merge sorts recursively
*/
console.log('-------------------------------------------------------------------------------------');

/* ---------- Whats happening in this recursive function ----------

mergeSort([2, 1, 3, 5, 4, 6, 8, 7]);
    left = [2,1,3,5];
    right = [4,6,8,7];

    mergeSort([2,1,3,5]);
        left = [2,1];
        right = [3,5];

        mergeSort([2,1]);
            left = [2];
            right = [1];

            mergeSort([2]);
                return [2];
            mergeSort([1]);
                return [1];

            sort all elements in [2,1]
            return sorted array [1,2]

        mergeSort([3,5]);
            left = [3];
            right = [5];

            mergeSort([3]);
                return [3];
            mergeSort([5]);
                return [5];
            
            sort all elements in [3,5]
            return sorted array [3,5]

        sort all elements in [1,2,3,5]
        return sorted array [1,2,3,5]

    mergeSort([4,6,8,7]);
        left = [4,6];
        right = [8,7];

        mergeSort([4,6]);
            left = [4];
            right = [6];

            mergeSort([4]);
                return [4];
            mergeSort([6]);
                return [6];

            sort all elements in [4,6]
            return sorted array [4,6]

        mergeSort([8,7]);
            left = [8];
            right = [7];

            mergeSort([8]);
                return [8];
            mergeSort([7]);
                return [7];
            
            sort all elements in [8,7]
            return sorted array [7,8]
        
        sort all elements in [4,6,7,8]
        return sorted array [4,6,7,8]

    sort all elements in [1,2,3,5,4,6,7,8]
    return sorted array [1,2,3,4,5,6,7,8]

-------------------------------------------------------------------

the passed in array is split up into left and right arrays until theres an array of length 1
arrays of length 1 wont enter the sorting phase and will just be returned as is.

arrays of length greater than 1 will go through the sorting phase where it will compare the
left and right arrays one element at a time and then change the original array accordingly.
since it modifies the original array, the left and right arrays to be compared will be sorted and
we compare then combine them once sorted.

in the end it returns a fully sorted array.

---------------------------------------------------------------- */
// modifies original array //
function mergeSort(arr) {

    if (arr.length > 1) {
        let mid = Math.floor((arr.length) / 2);
        let left = [...arr].splice(0, mid);
        let right = [...arr].splice(mid);

        mergeSort(left);
        mergeSort(right);

        let i = 0;
        let j = 0;
        let k = 0;

        while ((i < left.length && j < right.length)) {
            if (left[i] < right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            };
        };

        for (; i < left.length; i++) {
            arr[k++] = left[i];
        };

        for (; j < right.length; j++) {
            arr[k++] = right[j];
        };
    };

    return arr;
};
console.log(mergeSort([1,3,5,7,2,4,6])); // [1, 2, 3, 4, 5, 6, 7]
console.log(mergeSort([3,2,1,13,8,5,0,1]))// [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105,79,100,110]))// [79, 100, 105, 110]