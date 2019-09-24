// algorithm : process or set of steps to accomplish a certain task
// devise a PLAN for solving problems
// master common problem solving patterns

//PROBLEM SOLVING STEPS
//--understand the problem
//--explore concrete examples
//--break it down
//--solve/simplify
//--look back and refactor

//PT.1 UNDERSTAND THE PROBLEM
/* 

questions to ask yourself/interviewer etc.
  - can i restate the problem in my own words (not just a regurgitation)
  - what are the inputs that go into the problem?
  - what are the outputs that should come from the solution to the problem?
  - can the outputs be determined from the inputs? In other words, do I have enough
    information to solve the problem? (You may not be able to aanswer this question until
    you set about solving the problem. THats okayy; its still worth considering thequestion 
    at this early stage)
  - How should I label the important pieces of data that are a part of the problem? (terminology etc.)

  ex. write function which takes two numbers and returns their sum

  1. write a function that adds two numbers
  2. only 2 inputs? how large are the numbers? what if 1 left off? what about adding for or 10 numbers?
  3. should it return an integer? float? string? 
  4. Can get into nitty gritty about edge cases etc. and what ifs but is case by case
  5. have function named add and vars num1 and num2 etc.

*/

//PT.2 EXPLORE CONCRETE EXAMPLES

/* 

  -can help you understand the problem better
  -examples also provide SANITY CHECKS that your eventual solution works how it should
  -Ex. User Stories / Unit Tests
  
  1. start with simple examples that have input and output
  2. then progress to more comples examples
  3. explore examples with empty inputs
  4. explore examples with invalid inputs

  ex. write a function which takes a string and returns counts of each character in the string
  
  1.
  charCount('aaaa'); // { a: 4 }
  charCount('hello'); // { h: 1, e: 1, l: 2, o: 1} but begs question of are only letters
  that are present in output or can the rest of the alphabet be set to 0 and returned as well?

  2.
  'my phone number is 1234567' - account for spaces numbers underscores etc?
  'Hello hi' - uppercase and lowercase? same thing?

  3.
  charCount('') // null undefined?


*/

// PT.3 BREAK IT DOWN

/* 

  -comments for steps that need to be taken.
  -explicitly write out the steps you need to take
  - This forces you to think about the code you'll write befre you write it, and helps you
    catch any lingering conceptual issues or misunderstandings before you dive in and have to
    worry about details (e.g. language syntax) as well
  
  ex. write a function that takes a string and returns counts of each cahracter in the string

  function charCount(str){
    //do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values 
    should be the counts for those characters
  }

  ex. charCount('Your PIN is 1234') // will convert letters to lowercase and will create a count for the numbers as well

    function charCount(str){
      // make object to return at end
      // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in objects, add it and set value to 1
        // if character is something else (space, period, etc.) dont do anything
      // return object at end
    }

*/

//STEP 4. SOLVE OR SIMPLIFY
/* 

  -If you cant solve the problem/ solve a simpler problem! Dont get hung up on the small
  difficult aspects

  1. find the core difficulty in what youre trying to do
  2. temporarily ignore that difficulty
  3. write a simplified solution
  4. then incorporate that difficulty back in

  ex. write a function that takes a string and returns counts of each cahracter in the string

  function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each charcter
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      //if the char is a number/letter AND is a key in object, add one to count
      if(result[char] > 0) {
        result[char]++;
      } 
      //if the char is a number/letter AND not in object, add it to the object and set value to 1
      else {
        result[char] = 1;
      };
    }
    // if character is something else ( space, period, etc. ) dont do anything
    // return object at end
    return result;

  }

*/

function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

// console.log(charCount('hibaby you are real great!!! 123'));

//to refactor use for...of

function charCountRefactor(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
}

charCodeAt(0)

console.log(charCountRefactor('oh MY GOODnness 123 !!! uessss'));
//PT.5 LOOK BACK AND REFACTOR
/* 

  Refactoring questions
  1. can you check the result?
  2. can you derive the result differently?
  3. can you understand it at a glance?
  4. can you use the result or method for some other problem?
  5. can you improve the performance of your solution?
  6. can you think of other ways to refactor?
  7. how have other people solved this problem?



*/
