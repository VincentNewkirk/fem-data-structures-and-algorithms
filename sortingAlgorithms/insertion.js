/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1){
    for (let k = i + 1; k > 0; k -= 1) {
      if (arr[k] < arr[k - 1]) {
        const element = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = element;
      }
    };
  };
  return arr;
};

const testArr = [5,4,6,2,7,1];
console.log(insertionSort(testArr));
