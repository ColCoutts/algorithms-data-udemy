//objects unordered key value pairs
//called object literal
//BIG O OF OBJECTS - great when dont need ordering!
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(1)

//BIG O OBJECT METHODS
//object.keys = O(n)
//object.values = O(n)
//object.entries = O(n)
//hasOwnProperty = O(1)
let instructor = {
  firstName: 'Colin',
  lasName: 'Gold',
  faveNumbers: [1, 2, 4, 8]
};

//Arrays ordered lists!
//insertion - depends
//removal - depends
//searching - O(n)
//access - O(1)
//doesnt matter how long array is access is immediate if you have a valid index
let names = ['cols', 'fred', 'mary'];
let values = [true, {}, 2, [], 'awesome'];

//insertion caveats - adding at the end is constant time
//however at the beginning screws up the indexes of preexisting element and has to be reindexed which is costly
//removal from beginning causes reindexing problem as well and costly
// push and pop always faster than shift and unshift

//BIG O OF ARRAY OPERATIONS
//push - O(1)
//pop - O(1)
//shift - O(n)
//unshift - O(n)
//concat - O(n)
//slice - O(n)
//splice - O(n)
//sort - O(N * log N)
//forEach/map/filter/reduce/etc. - O(n)
