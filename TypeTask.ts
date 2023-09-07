// -----------------------------------------------------------------
// Task №1. Rang 8
// Sort and Star
console.log(``);
console.log(`Task №1. Sort and Star. Rang 8`);
export function twoSort(s: string[]): string {
    return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
console.log(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t');
console.log(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e');
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s')