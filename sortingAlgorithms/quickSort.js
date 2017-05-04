/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

const quickSort = (arr, lo, hi) => {
  let pivot = arr.length - 1;
  let pivotValue;
  let index = lo || 0;
  while (index !== pivot) {
    if (arr[index] > arr[pivot]) {
      pivotValue = arr[pivot];
      arr[pivot] = arr[index];
      arr[index] = pivotValue;
      pivot -= 1;
      pivotValue = arr[pivot];
      arr[pivot] = arr[index];
      arr[index] = pivotValue;
    } else {
      index += 1;
    }
  }
  return arr;
}

const testArr = [8,6,1,3,7,4,9,2];

console.log(quickSort(testArr));
