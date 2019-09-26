//HOW DO YOU IMPROVE?
// devise a plan
// master common problem solving patterns

// PATTERN EXAMPLES
/* 
  - Frequency Counter
  - Multiple Pointers
  - Sliding Window
  - Divide and Conquer
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking
  - etc......
*/

// FREQUENCY COUNTERS
// uses objects or sets to collect values/frequencies of values
// this can often avoid the need for nested loops or o(n^2) operations with arrays/strings
// any time your comparing multiple inputs and values

// EXAMPLE: write a function called Same, which accepts two arrays. The function should return true if every
// value in the array has it's corresponding value squared in the second array. The frequency of values must
// the same.

// NAIVE SOLUTION:

/* 
  function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    for(let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
        return false;
      }
      arr2.splice(correctIndex, 1) //use splice to confirm frequency of values/ so that it remembers matching 
      arr1 value with its square in arr2 causes arr2 to remove the squared value if true
    }
    return true;
  }

*/

// REFACTORED FREQUENCY COUNTER - complexity o(n)
// idea is: usually use an OBJECT to construct a profile or way of breaking down the contents of an
// array or string. Able to quickly compare that breakdown to how another object looks
/* 
  function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
      if(!(key ** 2 in frequencyCounter2)) {
        return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false
      }
    }
    return true
  }

*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log('freCo1', frequencyCounter1);
  console.log('freCo2', frequencyCounter2);
  return true;
}

// same([1, 2, 3, 2], [9, 1, 4, 4]);

// ANAGRAM CHALLENGE: given two strings, write a fuction to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name formed by reaaranging the
// letter of another, such as cinema, formed from iceman

function validAnagram(str1, str2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let val of str1) {
    frequencyCounter1[val] = frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : 1;
  }

  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log('freCo1', frequencyCounter1);
  console.log('freCo2', frequencyCounter2);
  return true;
}

// validAnagram('margana', 'anagram');

// ANOTHER SOLUTION

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// anytime you have multiple pieces of data to compare especially if it hold the SAME amount of data

// MULTIPLE POINTERS PATTERN
// creating POINTERS or VALUES that correspond to an index or position and move towards the beginning,
// end or middle based on a certain condition
// very efficient for soliving problems with minimal space complexity as well

// deal with strings or arrays and looking for a pair or some condition to be met

// EXAMPLE: write a function called sumZero which accepts a sorted array of integers. The function
// should find the first pair where the sum is 0. Return an array that includes both values that sum
// to zero or undefined if a pair does not exist
// ex. sumZero([-3, -2, -1, 0, 1, 2, 3]) --- return [-3, 3] as those two added together make 0

// NAIVE SOLUTION o(n^2) quadratic
/* 
  function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = i +1; j < arr.length; j++) {
        if(arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }

*/

// REFACTORED SOLUTION WITH POINTERS time complexity = o(n) / spacecomplexity = o(1)

/* 
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
      let sum = arr[left] + arr[right];
      if(sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else if(sum < 0) {
        left++;
      }
    }
  }


*/

// EXAMPLE: Implement a function called countUniqueValues, which accepts a sorted array, and counts
// the unique values in the array. There can be negative numbers in the array, but it will always
// be sorted

// ex. countUniqueValues([1, 1, ,1, 3]) -- returns 2 because 1 and 3 are the only unique numbers

function countUniqueValues(arr) {
  let first = 0;
  let second = 1;
  for(num in arr) {
    if(arr[first] === arr[second]) {
      second++;
    }
  if(arr[first] !== arr[second]) {
    first++;
    arr[first] = arr[second];
  }
  }
  // console.log('unique vals', arr.indexOf(arr[first]))
  return arr.indexOf(arr[first]);
}

// countUniqueValues([1, 2, 3]);


// SOLUTION THAT ACTUALLY WORKS

function countUniqueValuesNotMine(arr) {
  if(arr.length === 0) {
    return 0;
  }
  let first = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[first] !== arr[i]) {
      first++;
      arr[first] = arr[i];
    } // i increments automatically in for loop so dont need if statement whether first and i are the same
    console.log(first, i); //shows first and i can point to the same index of the array before i iterates again
  }
  console.log('first', first + 1)
  return first + 1;
}

const arr2 = [1, 2, 3, 4];
// countUniqueValuesNotMine(arr2);

// SLIDING WINDOW PATTERN
// this pattern involves creating a window which can either be an array or number from one position
// to another. Depending on certain conditions, the window either increases or closes(and a new
// window is created)
// very useful for keeping track of a subset of data in an array/string etc.

// EXAMPLE: write a function called maxSubarraySum which accepts an array of integers and a
// number called n. The function should calculate the maximum sum of n consecutive elements in
// the array.

// ex. maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 2) // returns 10

// NAIVE VERSION time complexity o(n^2)
/* 

  function maxSubarraySum(arr, num) {
    if (num > arr.length){
      return null;
    }
    let max = -Infinity;

    for(let i = 0; i < arr.length - num + 1; i++) { // arr.length - num + 1 allows iteration to not go past length of arr as it tries to add up n amount of elements
      temp = 0;
      for ( let j = 0; j < num; j++) {
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
      console.log(temp, max)
    }
    return max;
  }

*/

// Refactored version big o time complexity - o(n)
/* 
  function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for(let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i]; //sliding window part delete the first element and add the next element in array
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
*/

// DIVIDE AND CONQUER PATTERN
// this pattern involves dividing a data set into smaller hcunks and then repeating a process with a 
// subset of data
// pattern can tremendously decrease time complexity

// EXAMPLE: given a sorted array of integers, write a function called search, that accepts a value
// and returns the index where the value passed to the function is located. if the value is not found, return -1

// ex. search([1, 2, 3, 4, 5 ,6], 4) //returns 3
// NAIVE SOLUTION time complexity o(n)
/* 

  function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === val) {
        return i;
      }
    }
    return -1;
  }

*/

// REFACTORED SOLUTION Log(n) time complexity - Binary Search!

/* 
  function search(array, val) {
    let min = 0;
    let max = array.length -1;

    while(min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if(array[middle] < val) {
        min = middle - 1;
      }
      else {
        return middle;
      }
    }
    return -1;
  }

*/


// let num1 = 12345566;

// console.log(num1.toString().split(''))

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    console.log('i', i);
    console.log('num', num);
    console.log('arrietc', (tempSum - arr[i - num] + arr[i]));
    tempSum = tempSum - arr[i - num] + arr[i]; //sliding window part delete the first element and add the next element in array
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([1, 2, 4, 6, 7, 8, 2, 5, 9], 3);

