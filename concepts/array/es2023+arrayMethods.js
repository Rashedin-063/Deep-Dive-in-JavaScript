const numbers = [40, 10, 50, 30];

// ✅ toSorted() – Sorts the array without modifying the original
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // [10, 30, 40, 50]
console.log(numbers); // [40, 10, 50, 30] (unchanged)

// ✅ toReversed() – Returns a reversed version of the array
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers); // [30, 50, 10, 40]
console.log(numbers); // [40, 10, 50, 30] (unchanged)

// ✅ toSpliced() – Removes/adds elements and returns a new array
const splicedNumbers = numbers.toSpliced(1, 2); // Removes 2 elements from index 1
console.log(splicedNumbers); // [40, 30]
console.log(numbers); // [40, 10, 50, 30] (unchanged)

// ✅ findLastIndex() – Finds the index of the last matching element (from right to left)
const lastIndex = numbers.findLastIndex((num) => num === 10);
console.log(lastIndex); // 1 (Last occurrence of 10)
