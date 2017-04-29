//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const numberOne = (n) => {
  while (n !== 0) {
    n -= 1;
  }
  return 'success';
};

//2. Next, try looping just like above except using recursion
const numberTwo = (n) => {
  if (n === 0) {
    return 'success';
  }
  return numberTwo(n - 1);
};

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  return 'fuck this overly-complicated math problem that does not make me a better developer';
};

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const RecursiveExponent = (base, expo) => {
  return 'why is this function capitalized? ' + exponent();
};

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {

};

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = (array) => {
  
};
