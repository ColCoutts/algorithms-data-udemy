// ex. sameFrequency(182, 281) // true
// ex2. sameFrequency(34, 14) // false

/* 
  1.restate the problem
  write a function which takes 2 numbers and checks if the digits in both numbers
  are the same 
  2. they are 2 positive integers, no strings etc.
  3. it must return a boolean T/F depening on whether the 2 numbers have the same frequency of digits
  4. possibly, as long as they are both integers AND the numbers aren't too long for CPU, what about no integer? 
  5. have function named sameFrequence with vars of num1 num2

  pt2. explore concrete examples

  1. sameFrequency(182, 281) // true

  pt3. break it down

  function sameFrequency(num1, num2) {
    //turn num1 and num2 into something iterable (array,string)
    //use frequency counter pattern creating 2 objects to set the nums
    //compare the keys between the numbers as well as the value
    ex. (1882, 8812) => { 1: 1, 8: 2, 2: 1} / { 8: 2, 1: 1, 2: 1}
  }

*/

// pt.4 solve/simplify

function sameFrequency(num1, num2) {
  //make an object to store both numbers
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //turn nums to something that can be looped over
  let num1Loop = num1.toString().split('');
  let num2Loop = num2.toString().split('');
  console.log('num1l', num1Loop);
  console.log('num2l', num2Loop);

  //short circuit in case length of numbers arent the same(thereby not having same frequency)
  if (num1Loop.length !== num2Loop.length) return false;

  //loop through num1 and set to obj
  for (let val of num1Loop) {
    frequencyCounter1[val] = frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : 1;
  }

  //loop through num2 and set to obj
  for (let val of num2Loop) {
    frequencyCounter2[val] = frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : 1;
  }

  console.log('freCo1', frequencyCounter1);
  console.log('freCo2', frequencyCounter2);
  //now need to compare both the keys and values of the objs
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

// sameFrequency(1866, 8681);

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log('iInfirstForloop', i);
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // console.log('i', i);
    // console.log('num', num);
    console.log('arrsubtract', i - num); // essentially allowing to delete first element in set and add the next element in the array
    // console.log('arrietc', (tempSum - arr[i - num] + arr[i]));
    tempSum = tempSum - arr[i - num] + arr[i]; //sliding window part delete the first element and add the next element in array
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// maxSubarraySum([1, 2, 4, 6, 7, 8, 2, 5, 9], 3);

/* 
  PT.1
    1. restate the problem
    write a function that can take any number of arguments and returns a boolean based on whether there are any duplicate argument values passed in
    2. tricky, can take strings, numbers, letters etc., how about arrays and obj's?
    3. return a boolean T/F if there are any repeat argument values (True if there is False otherwise)
    4. will need to attend to edge case of only 1 or 0 args passed in. This is blind args though so needs to be very flexible
    5. have function called areThereDuplicates, use the arguments object

  PT.2 explore concrete examples
    ex. areThereDuplicates(1, 2, 3) // false
    ex. areThereDuplicates(1, 2, 2) // true
    ex. areThereDuplicates('a', 'b', 'a') // true

*/

// PT.3 BREAK IT DOWN

function areThereDuplicates(...Args) {
  //pass in ES6 syntax ...Args to represent variable args
  let argArray = [...Args];

  //instantiate an obj
  let argCounter = {};

  //for loop to iterate through args passed in
  for (let val of argArray) {
    //set args to be key in obj with frequency setting to its value
    argCounter[val] = argCounter[val] ? (argCounter[val] += 1) : 1;
    console.log('argCount', argCounter);
  }
  //for in loop through object
  for (key in argCounter) {
    //if statement to see if value of key is greater than or equal to 2 -- return true
    if (argCounter[key] >= 2) {
      console.log('there be dupes');
      return true;
    }
  }

  //return boolean
  console.log('there be NO dupes');
  return false;
}

areThereDuplicates(1, 2, 3, 4);

// Are there dupes with MULTIPLE POINTERS

function areThereDupesMultiPointer(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while(next < args.length) {
    if(args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}


// MULTIPLE POINTERS PROACTICE PROBLEMS

/* 
  PT.1 Understand the problem
    1. restate it in your own words
    write a function which takes an array and target average and perfoms addition of pairs of values and division by 2 for each set of values in the array. Return true if any of these pairs
    averages to the specified target average argument. Values do NOT need to be consecutive 
    2. take an ordered array and number(can either be whole or decimal) (Math.floor ? need to be explicit about how exact division will be)
    3. returns a boolean T/F depending on if any value pairs equal the target average
    4. need to address empty array sets as edge case as well as negative numbers potentially -- 
    5. function will be called averagePair passing in two arguments: arr, and targetAve

  PT.2 CONCRETE EXAMPLES
    ex. averagePair([1, 2, 3], 2.5) // return true
    ex. averagePair([-1, 0, 3, 4, 5, 6], 4.1 ) // return false
    ex. averagePair([], 4) // return false


*/

// PT.3 BREAK IT DOWN
  
  function averagePair(arr, num) {
    // create placeholder vars for targetAve and tempAve
    let targetAve = 0;
    // let fixedNum = num.toFixed(1);

    // edge case if arr.length is 0 or empty etc.
    if(arr.length === 0) return false;

    console.log('testaverage', (arr[0] + arr[2] / 2));
    // for loop through array i will be the second pointer
    for(let i = 1; i < arr.length; i++) {
      // some if statement checking the average to the targetAve
      if((arr[targetAve] + arr[i] / 2) === num ) {
        console.log('found it')
        return true
      } else {
        console.log('in the else statement')
        targetAve++
      }
    }
    return false;
  }

  // averagePair([1, 2, 3], 2);

  function averagePairNotMind(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
      let average = (arr[start] + arr[end]) / 2;
      if(average === num) {
        return true;
      } else if(average < num) start++;
      else end--;
    }
    return false
  }


  // write a function that takes 2 strings and checks whether the characters in the first
  // string form a subsequence of the characters in the second string. Function should check
  // whether the characters in teh first string appera dsomewhere in the second string, without their
  // order changing

  function isSubsequenceNotMine(str1, str2) {
    let i = 0;
    let j = 0;
    if(!str) return true;
    while(j < str2.length) {
      if(str2[j] === str1[i]) i++;
      if(i === str1.length) return true;
      j++;
    }
    return false;
  }

  /* 
   PT.1 understand
    1. write a function which takes a positive int and an arr, returns a subarray LENGTH of contiguous array elements which have a sum 
    greater or equal to the positive int arg
    2. takes arr and int, returns 0 if there is no subarray to satisfy condition
    3. returns smallest arr.length to statisfy condition
    4. may need to address empty arrays etc.
  
  */

  // BREAK IT DOWN

  function minSubArrayLen(arr, num) {
    // create windows
    let maxSum = 0;
    let tempSum = 0;

    // sort array from smallest to largest
    let sortedArr = arr.sort();
    console.log('sortedarr',sortedArr);
    for(let i = 0; i < arr.length; i++) {
      // returns if there is a number in the array larger or equal to the argument integer
      if(arr[i] >= num) {
        console.log(`found correct number ${arr[i]} at ${i}`);
        return 1;
      } else {
        maxSum += arr[i];
      }
    }
  }

  minSubArrayLen([2, 1, 4, 8], 5);


  function minSubArrayLenNotMine(arr, num) {
    // instantiate the window start / end as well as total counter and a minLen(minlength?) var
    let total = 0;
    let start = 0;
    let end = 0;
    // acting as our variable length window
    let minLen = Infinity;

    // while loop which will continue as long as the start var is less than the arr length
    while(start < arr.length) {
      // if current window doesnt add up to the given num then
      // move window to right
      if(total < num && end < arr.length) {
        // set total to the end var (this is the variable that moves down the array)
        total += arr[end];
        // increment end count after setting to total
        end++
      }
      // if current window adds up to at least the num given then
      // we can shrink the window
      else if(total >= num) {
        console.log('endstart', end-start)
        minLen = Math.min(minLen, end-start);
        total -= arr[start];
        start++;
      }
      else {
        break;
      }
    }
    return minLen === Infinity ? 0 : minLen;
  }


  // setting an upper register for amount of elements with Infinity
  // minLen will only continue to be Infinity if there are no sums that will 
  // reach the number thus returning 0 in the final ternary

  // NOTES:

  /* 
  
    need to take advantage of built in function help
      - the use of Infinity to serve as one constraint on the window
      - using while loops more effectively
      - determining the right helper vars needed 
  
  */ 

minSubArrayLenNotMine([1, 2, 4, 5, 6, 8], 10);
