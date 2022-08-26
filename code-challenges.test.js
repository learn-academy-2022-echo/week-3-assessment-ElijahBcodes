// ASSESSMENT 3: Coding Practical Questions with Jest
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// a) Create a test with expect statements for each of the variables provided.
// Pseudo Code 
// Create a test to see if the functions out put is equal to the sum of each number added to the next 
// So a string that is a length of 6 would out put an array [1, 1, 2, 3, 5, 8], and a string length 10 would output an array of [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
describe("fibonacci", () => {
// Ran test without function and returned expected fail 
// FAIL  ./code-challenges.test.js
    it("returns an array", () => {
      expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
      expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    });
  });
// b) Create the function that makes the test pass.
  function fibonacci(num){//declare a function taking a number as a variable
  //the loop will return a new number each time being the number at the index subtracted by
    const number = [1,1];// declare an array with 1,1 
    for( let i = 2; i < num; i++) { //starting at 2 continue loop until the i (index is < num)
    number[i] = number[i - 1] + number[i -2]//the number is equal to f
    } 
    return number
  }
// The test did not pass I got a fibonacci array but it included 0 and I could not figure out how to start with 1 instead of zero... heres the output :[0, 1, 1, 2, 3, 5] and [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] so I changed the value in the initial variable and it passed 
// PASS  ./code-challenges.test.js
// Pseudo Code: function takes a number as Input
// The number determines how many numbers are output or how many times the loop will execute 
// Starts at zero and then 1 is added to zero 
// then 1 is added to 1 and so on 
// 
//const fibonacci = () =>{ ////
//   let n1 = 0;
//   let n2 = 1; 
//   newNum = (n1 + n2);
//   while(newNum <= num) {
//     n1 = n2;
//     n2 = newNum;
//     newNum = n1 +n2
//   }
// }
// const fibonacci = (num) => {
//   let num1 = 0                       
// let num2 = 1                      
// let newArr = []                        
// for(num1 < num2){                      
//   let newArr = num1+num2
// }
// Pseudo Code 
//the input will tell us  length 
//Starting with  number 2  add that number to the prev number  
//do this until the array is equal to the input

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//Pseudo code: make a test with expect statement for the following variables 
  const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// a) Create a test with expect statements for each of the variables provided.
describe("oddlyEnough", () => {
  it("returns an array with only odd numbers", () => {
    expect(oddlyEnough(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(oddlyEnough(fullArr2)).toEqual([-823, 7, 23]);

  });
});
// FAIL  ./code-challenges.test.js // had a good fail at the expect since there is no function
// Expected output fullArr1: [-9, 7, 9, 199]
// Expected fullArr2: [-823, 7, 23]
// b) Create the function that makes the test pass.
//Pseudo code: taking an array as input 
//Takes an array of numbers and strings and only return numbers that are odd, ignore everything else
//output will be an array with only the odd numbers 
// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]


const oddlyEnough =(array) =>{
  let oddNums  = array.filter(value => value % 2 !== 0 && (typeof value == 'number'))
  return oddNums.sort((a,b)=>a-b);
}
// PASS  ./code-challenges.test.js// This was a huge milestone for me. Breaking down the problem into small steps really helped. In the end my code worked but my test was failing because the variables were being declared after and inside the test. //The rest of the code is just my failed attempts and code that was almost there. Thank you Char for the short but concise help to steer me to my solution!
  // let numberStuff = fullArr1.filter((notebook)=>{ ///this filters out the numbers 
  //     return typeof notebook === "number"
  //   }) 
//   const oddlyEnough =(array) =>{
//   let oddNums  = array.filter(value => value % 2 !== 0){ //this filters for odd nums 
//   return oddNums 
//  }      
// }
//the return was  [9, undefined, undefined, undefined, 7, 199, -9, undefined] meaning that maybe I should just try to map the whole thing. It takes the type pf statement as true or false
  // let nuwNum = numStuff.map(value =>{
  //   if(value % 2 !== 0 && (typeof value)=='number' ){
  //     return value
  //   }
  // })
  // return newNum
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
//Pseudo code: make a test with expect statement 
// if this is input  const numbersToAdd1 = [2, 4, 45, 9],
// This is the Expected output: [2, 6, 51, 60]
const numbersToAdd1 = [2, 4, 45, 9]
const numbersToAdd2 = [0, 7, -8, 12]
const numbersToAdd3 = []
describe("numSum", () => {
  it("takes in an array and returns an array of the same length with the accumulating sum", () => {
    expect(numSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(numSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(numSum(numbersToAdd3)).toEqual([]);
  });
});
//the test passed  PASS  ./code-challenges.test.js
// Expected output: [2, 6, 51, 60]

// Expected output: [0, 7, -1, 11]

// Expected output: [] 
// b) Create the function that makes the test pass.
//Pseudo code: 
//Input will be an array of numbers. 
//take first number in the array and add it to the previous number in array 
//function will
//store the sum, repeat 
//output will be an array and empty array if no values in array 

const numSum =(array) => {
  for(let i = 1; i < array.length; i ++){
    array[i] = array[i] + array[i -1]
}
return array
}
  



//notes below from failed attempts. 
// function numberSum(num){        //this didnt work, return was an empty array 
//   const sum=[]
//     for(i = 0; i > num.length; i ++){
//     sum = num[i-1]+ num[i]
//     }
//     return sum
// } 
// const numberSum = function numberSum(array){   //This function gives the sum of the array not what we are looking for? getting closer...
  // let sum = 0;
  // for(let number of array ){
  //   sum += number; 
  //   return sum
  // }
// numberSum([2, 4, 45, 9]) //output was 60

// const num = [2, 4, 45, 9]
// const numB = num => {
//   const added = [];
//   for(let i = 0; i < num.length; i +=1){
//   added.push(num[i] + (num[i-1] || 0));
// };
// return added;
// }




// const numberSum = (array) => {
//   let numbers = array.filter(value => value < 100)
//   let oddNums = number.map(value => {
//     if (value % 2 !== 0 )
//       return value
//   })
// return oddNums
// }


// const numberSum = (array) => {
//   return array.map((sum => value => sum += value)(0))
// }