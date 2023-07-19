const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let a = START; a <= END; a++) {
  simpleOne.push(a)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let b = START - 1; b < END; b++) {
  const innerArray = []
  for (let c = 0; c <= b; c++) {
    innerArray.push(b + 1)
  }
  nestedOne.push(innerArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let d = START; d < END + 1; d++) {
  const array3 = []
  for (let e = d; e > 0; e--) {
    array3.push(e)
  }
  nestedTwo.push(array3)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i < END + 1; i++) {
  const arrayA = []
  for (let j = START; j <= i; j++) {
    const arrayB = []
    for (let n = START; n <= j; n++) {
      arrayB.push(i)
    }
    arrayA.push(arrayB)
  }
  deepOne.push(arrayA)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i < END + 1; i++) {
  const arrayA = []
  for (let j = START; j <= i; j++) {
    const arrayB = []
    for (let n = START; n <= j; n++) {
      arrayB.push(n)
    }
    arrayA.push(arrayB)
  }
  deepTwo.push(arrayA)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i < END + 1; i++) {
  const arrayA = []
  for (let j = START; j <= i; j++) {
    const arrayB = []
    let sum = 0
    for (let n = START; n <= j; n++) {
      sum = n * n + sum
    }
    const num = sum / j
    arrayB.push(num)
    arrayA.push(arrayB)
  }
  deepThree.push(arrayA)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
