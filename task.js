// Task №1. Rang 7
// Array of String To Array of Numbers
console.log(`\nTask 1. Array of String To Array of Numbers. Rang 7`);
const toNumberArray = (stringarray) => stringarray.map((i) => +i);

console.log(toNumberArray(["1.1", "2.2", "3.3"]));

// -----------------------------------------------------------------
// Task №2. Rang 6
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
// Task №3. Rang 7
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
  if (n == 0 || n < 0) return [];
  for (let i = 0; i < n - 1; i++) {
    XXX.push(XXX[i] ** 2);
  }
  return XXX;
}
console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(2, 0), []);
// -----------------------------------------------------------------
// Task №6. Rang 8
// You Can't Code Under Pressure #1
console.log(``);
console.log(`Task 6. You Can't Code Under Pressure #1. Rang 8`);

const doubleInteger = (i) => i * 2;
console.log(doubleInteger(2), 4);
// -----------------------------------------------------------------
// Task №7. Rang 6
// Find the missing term in an Arithmetic Progression
console.log(``);
console.log(
  `Task 7. Find the missing term in an Arithmetic Progression. Rang 6`
);

var findMissing = function (list) {
  return (
    ((list[0] + list[list.length - 1]) / 2) * (list.length + 1) -
    list.reduce((acc, num) => acc + num, 0)
  );
};

console.log(findMissing([1, 3, 4]), 2);
// -----------------------------------------------------------------
// Task №8. Rang 5
// Challenge Fun #14: Target Game
console.log(``);
console.log(`Task 8. Challenge Fun #14: Target Game. Rang 5`);

function targetGame(vals) {
  var maxHere, maxLast;
  maxHere = maxLast = 0;
  for (var i = 0, len = vals.length; i < len; i += 1) {
    [maxLast, maxHere] = [maxHere, Math.max(maxHere, maxLast + vals[i])];
  }
  return Math.max(maxHere, maxLast);
}

console.log(targetGame([1, 2, 3, 4]),6);
console.log(targetGame([36, 42, 93, 29, 0, 33, 15, 84, 14, 24, 81, 11]),327);
console.log(targetGame([26, 54, 36, 35, 63, 58, 31, 80, 59, 61, 34, 54, 62, 73, 89, 7, 98, 91, 78]),615);
// -----------------------------------------------------------------
// Task №9. Rang 6
// Tortoise racing
console.log(``);
console.log(`Task 8. Tortoise racing. Rang 6`);

function race(v1, v2, g) {
  if (v1 >= v2) {
      return null
  }
  return arr = [
      Math.floor(g / (v2 - v1)),
      Math.floor(g / (v2 - v1) * 60 - Math.floor(g / (v2 - v1)) * 60),
      Math.floor(g / (v2 - v1) * 3600 - (Math.floor(g / (v2 - v1)) * 3600) - (Math.floor(g / (v2 - v1) * 60 - Math.floor(g / (v2 - v1)) * 60)*60))]
}

console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
console.log(race(720, 850, 37), [0, 17, 4])