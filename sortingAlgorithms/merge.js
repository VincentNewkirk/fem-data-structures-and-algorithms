/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const lArray = mergeSort(arr.slice(0, middle));
  const rArray = mergeSort(arr.slice(middle));

  const merge = (leftArray, rightArray) => {
    let leftCounter = 0;
    let rightCounter = 0;
    const returnArray = [];
    while (leftCounter < leftArray.length || rightCounter < rightArray.length) {
      if (!leftArray[leftCounter]) {
        returnArray.push(rightArray[rightCounter]);
        rightCounter += 1;
      } else if (!rightArray[rightCounter]) {
        returnArray.push(leftArray[leftCounter]);
        leftCounter += 1;
      } else if (leftArray[leftCounter] < rightArray[rightCounter]) {
        returnArray.push(leftArray[leftCounter]);
        leftCounter += 1;
      } else {
        returnArray.push(rightArray[rightCounter]);
        rightCounter += 1;
      }
    }
    return returnArray;
  };

  return merge(lArray, rArray);

};

const testArr = [23,1,25,43,12,65,34,50,63];

console.log(mergeSort(testArr));
