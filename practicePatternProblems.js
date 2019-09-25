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

  console.log('freCo1', frequencyCounter1)
  console.log('freCo2', frequencyCounter2)
  //now need to compare both the keys and values of the objs
  for(let key in frequencyCounter1) {
    if(!key in frequencyCounter2) {
      return false;
    }
    if(frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;

}

sameFrequency(1866, 8681);
