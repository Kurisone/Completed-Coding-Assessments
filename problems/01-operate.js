/*
Build a function that takes in three arguments: num1, num2,
and a string operation. Each number will be an integer and the operation will
be 'greater than', 'less than', 'equal to' or 'not equal to'. Your function will
perform the operation between the two numbers and return the answer.

If the operation is invalid, return the string 'Invalid Operation'.
*/

function operate(num1, num2, operation) {
  // Your code here 
  switch(operation){
    case 'greater than':
      return num1 > num2;
    case 'less than':
      return num1 < num2;
    case 'equal to':
      return num1 === num2;
    case 'not equal to':
      return num1 !== num2;
    default:
      return 'Invalid Operation'
  }
}

operate(456, 123, 'greater than'); // true
operate(654, 654, 'less than');    // false
operate( 99,   3, 'equal to');     // false
operate(111,   3, 'not equal to'); // true
operate( 42,  42, 'opposite to');  // 'Invalid Operation'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = operate;
