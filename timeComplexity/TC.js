var countChars = function(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
      count++;
  }
  return count;
};
countChars("dance");
countChars("walk");
//Time Complexity:

var countChars = function(str){
  return str.length;
};
countChars("dance");
countChars("walk");
//Time Complexity:
//How much more work would it take to get the
//length of 1 million char string?

var myList = ["hello", "hola"];
//Time Complexity:
myList.push("bonjour");
//Time Complexity:
myList.unshift();
//Time Complexity:
//calculate the time complexity for the
//native methods above (separately)
