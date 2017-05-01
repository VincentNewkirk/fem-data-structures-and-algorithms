/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        const ele = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = ele;
      };
    };
  };
  return arr;
};

const testArr = [2,4,10,0,8,3,5];
const testArr2 = [10,2,5,1,5,9];

console.log(bubbleSort(testArr2));
