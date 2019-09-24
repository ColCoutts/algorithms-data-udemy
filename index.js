const testFunction = () => {
  console.log('Im hooked up');
};

testFunction();

function addUpToArray(n) {
  return n.reduce((acc, currentItem) => acc + currentItem, 0);
}

const randoArr = [1, 23, 5, 8, 7];

console.log(addUpToArray(randoArr));

//Big 0 = 0(n) -- as input increases the runtime will also increase proportionally
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

//holy moly so much faster!
// Big 0: 0(1) -- always 3 operations, as input grows there is no change reflectd in the runtime
function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpToNew(100000000);
let t2 = performance.now();

console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

//starting linearly with O(n) and even though has 2 for loops they aren't nested
function countUpAndDown(n) {
  console.log('going up');
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log('at the top going back down');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('back down, later');
}

countUpAndDown(12);

//example of O(n^2) because nested for loops square the O(n) of each for loop
//exponential curve as n input grows time increases at rate of n squares example of a quadratic
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n) -- linear increase as n increases
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(1) as it grows it tops out at 5
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(2);

///SPACE COMPLEXITY EXAMPLES

// O(1) space because only has 2 number assignments, doesnt matter how variables are being added to only that 
//that we arent adding any new variables to the space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const randomArray = [1, 2, 3, 4, 5];

console.log('space complexity sum', sum(randomArray));

//as input approaches infinity, array getting longer in direct proportion to the input array as seen
//inside the for loop by pushing the arr integers into the new array which is n numbers
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
