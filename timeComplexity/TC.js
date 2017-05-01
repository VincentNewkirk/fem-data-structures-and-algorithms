var countChars = function(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
      count++;
  }
  return count;
};
countChars("dance");
countChars("walk");
//Time Complexity: O(n)

var countChars = function(str){
  return str.length;
};
countChars("dance");
countChars("walk");
//Time Complexity: O(1)
//How much more work would it take to get the
//length of 1 million char string?
//Answer: It is Constant time complexity. It would be the same.

var myList = ["hello", "hola"];
//Time Complexity: O(1)
myList.push("bonjour");
//Time Complexity: O(1)
myList.unshift();
//Time Complexity: O(n)
//calculate the time complexity for the
//native methods above (separately)
