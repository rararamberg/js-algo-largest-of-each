const largestOfEach = (arr) => arr.map((singleArr) => Math.max(...singleArr));

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// since returning a new array using the .map() method
// within that method only return the Math.max() of each array
// using the spread operator
// since the functionality already gives the return of desired output with
// help of .map() and Math.max()
// setting function to one line for return
