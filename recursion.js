//RECURSION
//basically taking a problem and doing it over and over on a smaller piece

/* 
Recursion: a function that calls itself

JSON.parse/stringify are examples of recursion

callstack: manages what happens when functions are invoked

recursive functions: invoke the SAME function with  different input until you reach your base case

Base Case: condition when the recursion stops

Different Input: each time calling function need diff. input -augment data to repass it through recursive function


FIRST RECURSIVE FUNCTION:

function countDown(num) {
    if(num <= 0) {
        console.log('All Done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}


SECOND RECURSIVE FUNCTION:

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

*/