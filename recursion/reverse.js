/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

const stringReverse = (str) => {
  let reversedString = '';
  const endOfString = str.length - 1;

  const recusriveStrReverse = (i) => {
    if (i < 0) {
      return reversedString;
    }
    reversedString = reversedString + str.slice(i, i + 1);
    return recusriveStrReverse(i - 1);
  }

  return recusriveStrReverse(endOfString);
};
// console.log(stringReverse('qwerty'));
// ytrewq
