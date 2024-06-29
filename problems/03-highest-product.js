/*
First, create a function called getProduct(nums) which takes a
single array of numbers and returns the product.

Then, write a function highestProduct(numsList) that takes in a 2-dimensional
array of numbers and returns the index of the sub-array with
the highest product value (the value of all of the elements multiplied
together).

Constraint: Use the getProduct function as a helper function in the
highestProduct function to solve the problem.
*/

function getProduct(nums) {
  // Your code here 
  let product = 1
  for(let i = 0; i < nums.length; i++){
    product *= nums[i]
  } return product
}

function highestProduct(numsList) {
  // Your code here 
  let max = -Infinity
  let maxIndex = -1
for(let i = 0; i < numsList.length; i++){
  let product = getProduct(numsList[i])
    if(product > max){
    max = product
    maxIndex = i
    }
  }return maxIndex
} 


const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

console.log(getProduct(arrayA)); // 120
console.log(getProduct(arrayB)); // 21
console.log(getProduct(arrayC)); // 4000
console.log(getProduct(arrayD)); // 1800

console.log(highestProduct([arrayA, arrayB, arrayC, arrayD])); // 2
console.log(highestProduct([arrayA, arrayB])); // 0
console.log(highestProduct([arrayA, arrayD])); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  getProduct,
  highestProduct,
};
