// Task №1
// Array of String To Array of Numbers
console.log(`Task 1. Array of String To Array of Numbers`);
const toNumberArray = (stringarray) => stringarray.map((i) => +i);

console.log(toNumberArray(["1.1", "2.2", "3.3"]));

// -----------------------------------------------------------------
// Task №2
// Plus array
console.log(``);
console.log(`Task 2. Plus array. Rang 6`);
function upArray(arr) {
  if (
    arr.some((elem) => {
      if (elem > 9) return true;
    }) ||
    arr.some((elem) => {
      if (elem < 0) return true;
    }) ||
    arr.length == 0 ||
    arr.some((elem) => {
      if (elem % 1 !== 0) return true;
    })
  )
    return null;

  arr[arr.length - 1] += 1;

  function recalcArr(array, index) {
    if (index == -1) return array;
    if (index == 0 && array[0] == 10) {
      array[0] = 0;
      return array.unshift(1);
    }

    if (array[index] == 10) {
      array[index] = 0;
      array[index - 1] += 1;
    }

    return recalcArr(array, --index);
  }

  recalcArr(arr, arr.length - 1);

  return arr;
}

console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
console.log(upArray([9, 9, 9, 9]), [1, 0, 0, 0, 0]);
console.log(upArray([9, 9]), [1, 0, 0]);
console.log(upArray([0, 7]), [0, 8]);
console.log(upArray([1, -9]));
console.log(upArray([1, 10]));

// -----------------------------------------------------------------
// Task №3
// Sum even numbers
console.log(``);
console.log(`Task 3. Sum even numbers. Rang 7`);
function sumEvenNumbers(input) {
  let newArr = [];
  input.map((i) => {
    if (i % 2 == 0) newArr.push(i);
  });
  return newArr.reduce((acc, num) => acc + num, 0);
}

console.log(sumEvenNumbers([1, 2, 4, 8, 6, 7, 3]));

// -----------------------------------------------------------------
// Task №4. Rang 4
// Sum Strings as Numbers
console.log(``);
console.log(`Task 4. Sum Strings as Numbers. Rang 4`);
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings("351", "453"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
// -----------------------------------------------------------------
// Task №5. Rang 7
// Sum Strings as Numbers
console.log(``);
console.log(`Task 5. Squares sequence. Rang 7`);

function squares(x, n) {
  let XXX = [x];
  if (n == 0 || n < 0) return []
  for (let i = 0; i < n - 1; i++) {
    XXX.push(XXX[i] ** 2);
  }
  return XXX;
}
console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(2,0), []);
// -----------------------------------------------------------------
// Task №6. Rang 8
// You Can't Code Under Pressure #1
console.log(``);
console.log(`Task 6. You Can't Code Under Pressure #1. Rang 8`);

const doubleInteger = (i) =>  i*2;
console.log(doubleInteger(8), 8);
// -----------------------------------------------------------------
// Task №7. Rang XXX
// **NAME**
console.log(``);
console.log(`Task 7. **NAME**. Rang XXX`);