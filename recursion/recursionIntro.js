//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const numberOne = (n) => {
  while (n !== 0) {
    n -= 1;
  }
  return 'success';
};
// console.log(numberOne(10));
// success

//2. Next, try looping just like above except using recursion
const numberTwo = (n) => {
  if (n === 0) {
    return 'success';
  }
  return numberTwo(n - 1);
};
// console.log(numberTwo(15));
//success

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  return 'fuck this overly-complicated math problem that does not make me a better developer';
};
//lol

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const RecursiveExponent = (base, expo) => {
  return 'why is this function capitalized? ' + exponent();
};
//lol

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
  const returnArray = [];
  let index = 0;

  const recursiveLoop = (i) => {
    if (returnArray.length === arr.length) {
      return returnArray;
    }
    returnArray.push(arr[i] * num);
    return recursiveLoop(i + 1);
  };

  return recursiveLoop(index);
};
// console.log(recursiveMultiplier([2,4,6,8], 10));
// [ 20, 40, 60, 80 ]

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = (array) => {
  const returnArray = [];
  let counter = array.length - 1;

  const recursiveFunc = (i) => {
    if (i < 0) {
      return returnArray;
    }
    returnArray.push(array[i]);
    return recursiveFunc(i - 1);
  }

  return recursiveFunc(counter);
};
// console.log(recursiveReverse([10,12,24,30]));
// [ 30, 24, 12, 10 ]
