//Write a function that takes in a non-empty array of distinct integers and an interger representing a target sum. The function should find all the quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order. If no four numbers sum up to the target sum, the function should return an empty array. 

// Sample input: array = [7, 6, 4, -1, 1, 2] targetSum = 16;
// Sample output: [[7, 6, 4, -1], [7, 6, 1, 2]]

//LOGIC

//Four nested for loops: Much like two and three number sum problems, one can imagine that four nested for loops could find all the valid quadruplets. This however would be considerably inefficient. The time complexity of this approach would be O(n^4), exponentially increasing time needed to completion as the input array increases in size. For this reason, we'll skip this approach altogether. 

//Hash table approach: For this approach, we need to examine how to point to four different values at once and sum them to compare to targetSum. Well, two added values produce one value. So if we add every combination of two numbers together, we can point to them and compare them to each other in order to find all possible quadruplets. This can be done by using a hash table to store the combinations of two added values(as an array) and its twoSum result; This twoSum result will be used as the key to these values. As we store new key/value pairs into the hash table, we will compare them to the current values being pointed to and check if they equal the targetSum; If they do, we store in the quadruplets 2D array. This process repeats until we find all possible quadruplets. Then we return the quadruplets 2D array to complete the function. 

//The time complexity of this approach is O(n^2) given that we're using two loops inside of another for loop. The space complexity is O(n^2) given that we're using a hash table to store all the possible pairs.

//O(n^2) time | O(n^2) space complexity
function fourNumberSum(array, targetSum) {
  // Write your code here.
  let storedPairs = {};
  let quadruplets = [];

  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j <array.length; j++) {
      let currentSum = array[i] + array[j];
      let difference = targetSum - currentSum;
      if(storedPairs[difference]) {
        storedPairs[difference].forEach(pair => {
          quadruplets.push([pair[0], pair[1], array[i], array[j]])
        }); 
      }
    }
    for(let k = 0; k < i; k++) {
      let currentSum = array[i] + array[k];
      if(storedPairs[currentSum]) {
        storedPairs[currentSum].push([array[i], array[k]]);
      } else {
        storedPairs[currentSum] = [[array[i], array[k]]];
      }
    }
  }
  return quadruplets;
}