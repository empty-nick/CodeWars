// Task №1. Rang 7
// Array of String To Array of Numbers
console.log(`\nTask 1. Array of String To Array of Numbers. Rang 7`);
const toNumberArray = (stringarray) => stringarray.map((i) => +i);

console.log(toNumberArray(['1.1', '2.2', '3.3']));

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
    arr.length === 0 ||
    arr.some((elem) => {
      if (elem % 1 !== 0) return true;
    })
  )
    return null;

  arr[arr.length - 1] += 1;

  function recalcArr(array, index) {
    if (index === -1) return array;
    if (index === 0 && array[0] === 10) {
      array[0] = 0;
      return array.unshift(1);
    }

    if (array[index] === 10) {
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
    if (i % 2 === 0) newArr.push(i);
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

console.log(sumStrings('351', '453'));
console.log(
  sumStrings('712569312664357328695151392', '8100824045303269669937')
);
// -----------------------------------------------------------------
// Task №5. Rang 7
// Sum Strings as Numbers
console.log(``);
console.log(`Task 5. Squares sequence. Rang 7`);

function squares(x, n) {
  let XXX = [x];
  if (n === 0 || n < 0) return [];
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

const findMissing = function (list) {
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
  let maxHere, maxLast;
  maxHere = maxLast = 0;
  for (let i = 0, len = vals.length; i < len; i += 1) {
    [maxLast, maxHere] = [maxHere, Math.max(maxHere, maxLast + vals[i])];
  }
  return Math.max(maxHere, maxLast);
}

console.log(targetGame([1, 2, 3, 4]), 6);
console.log(targetGame([36, 42, 93, 29, 0, 33, 15, 84, 14, 24, 81, 11]), 327);
console.log(
  targetGame([
    26, 54, 36, 35, 63, 58, 31, 80, 59, 61, 34, 54, 62, 73, 89, 7, 98, 91, 78,
  ]),
  615
);
// -----------------------------------------------------------------
// Task №9. Rang 6
// Tortoise racing
console.log(``);
console.log(`Task 9. Tortoise racing. Rang 6`);

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }
  return [
    Math.floor(g / (v2 - v1)),
    Math.floor((g / (v2 - v1)) * 60 - Math.floor(g / (v2 - v1)) * 60),
    Math.floor(
      (g / (v2 - v1)) * 3600 -
        Math.floor(g / (v2 - v1)) * 3600 -
        Math.floor((g / (v2 - v1)) * 60 - Math.floor(g / (v2 - v1)) * 60) * 60
    ),
  ];
}

console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
console.log(race(720, 850, 37), [0, 17, 4]);
// -----------------------------------------------------------------
// Task №10. Rang 4
// Tortoise racing
console.log(``);
console.log(`Task 10. Next bigger number with the same digits. Rang 4`);

function nextBigger(n) {
  const numArr = Array.from(String(n), Number);
  if (numArr.length === 1 || numArr.every((element) => numArr[0] === element))
    return null;

  for (let index = 0; index <= numArr.length; index++) {
    const state = n + (3 * index)
    if(Array.from(String(state), Number).includes(numArr[0])) return 'hi'
  }
  return +numArr.join('');
}

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);
console.log(nextBigger(9), null);
console.log(nextBigger(111), null);
// -----------------------------------------------------------------
// Task №11. Rang 4
// Tortoise racing
console.log(``);
console.log(`Task 11. Permutations. Rang 4`);
function permutations(string) {
  if ([...string].length === 1) return [...string];

  let arr = [string], a = []

  arr.forEach( element => a.push(element))
  
  return a
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab'), ['ab', 'ba']);

// -----------------------------------------------------------------
// Task №12. Rang 7
// Tortoise racing
console.log(``);
console.log(`Task 12. Fix My Phone Numbers! Rang 7`);
function isItANum(str) {
  let filteredStr = [...str].filter( elem => Number.isInteger(+elem)).join('').trim().replace(/\s/g, '')
  return filteredStr.startsWith('0') && filteredStr.length === 11 ? filteredStr : `Not a phone number`
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
console.log(isItANum("0192387415456"), "Not a phone number");
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
console.log(isItANum("stop calling me no I have never been in an accident"), "Not a phone number")

// -----------------------------------------------------------------
// Task №13. Rang 5
// Convert PascalCase string into snake_case
console.log(``);
console.log(`Task №13. Convert PascalCase string into snake_case. Rang 5`);
function toUnderscore(string) {
  return (string + '').replace(/[A-Z]/gm, previous => `_${previous.toLowerCase()}`).replace(/^_/gm, '')
}

console.log(toUnderscore("TestController") + ' //test_controller')
console.log(toUnderscore("MoviesAndBooks") + ' //movies_and_books')
console.log(toUnderscore("App7Test") + ' //app7_test')
console.log(toUnderscore(1) + ' //1')

// -----------------------------------------------------------------
// Task №14. Rang 8
// Super Duper Easy
console.log(``);
console.log(`Task №14. Super Duper Easy. Rang 8`);
function problem(x){
  return typeof x === 'number' ? x * 50 + 6 : `Error`
}

console.log(problem("hello"), "Error")
console.log(problem(1), 56)
console.log(problem(5), 256)
console.log(problem(0), 6)
console.log(problem(1.2), 66)

// -----------------------------------------------------------------
// Task №15. Rang 8
// Adding Big Numbers
console.log(``);
console.log(`Task №15. Adding Big Numbers. Rang 4`);
function add(a, b) {
  if (a + b < Number.MAX_SAFE_INTEGER)
    return Number(a) + Number(b) + ''

  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let result = '';
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}

console.log(add("1", "1"), "2");
console.log(add("123", "456"), "579");
console.log(add("888", "222"), "1110");
console.log(add("1372", "69"), "1441");
console.log(add("12", "456"), "468");
console.log(add("101", "100"), "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")

// -----------------------------------------------------------------
// Task №16. Rang 8
// Find Multiples of a Number
console.log(``);
console.log(`Task №16. Find Multiples of a Number. Rang 8`);
function findMultiples(integer, limit) {
  if (limit === 0)
    return [0]

  let arr = []
  for (let i = integer; i <= limit; i+=integer) {
    arr.push(i)
  }
  return arr
}

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])

// -----------------------------------------------------------------
// Task №17. Rang 8
// Grasshopper - If/else syntax debug
console.log(``);
console.log(`Task №17. Grasshopper - If/else syntax debug. Rang 8`);
function checkAlive (health) {
  return health > 0;
}

console.log(checkAlive(5), true)
console.log(checkAlive(0), false)

// -----------------------------------------------------------------
// Task №18. Rang 8
// Sort and Star
console.log(``);
console.log(`Task №18. Sort and Star. Rang 8`);
function twoSort(s) {
  let word = ''
  s.sort()[0].replace(/\w/gm, (letter) => {
    if (s.sort()[0].at(-1) !== letter)
      word += `${letter}***`
    else
      word += letter
  })
  return word
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e')