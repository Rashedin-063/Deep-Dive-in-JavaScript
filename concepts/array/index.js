const numbers = [10, 25, 18, 40, 63, 55];
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const words = ['hello', 'world'];


// console.log(numbers.findIndex((num) => num < 40));

// console.log(numbers.some((num) => num > 60));

// console.log(numbers.every((num) => num > 10));

// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

// console.log(words.flatMap((word) => word.split('')));
// console.log(words.flatMap((word) => word.split('')).sort())

// console.log(new Array(6).fill(3))
// console.log(new Array(6).fill('Ru ni'))

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(3, 4));


// const sortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log(sortedNumbers); // [10, 30, 40, 50]
// const sortedNumbers2 = numbers.toSorted((a, b) => b - a);
// console.log(sortedNumbers2);
// console.log(numbers);

// const reversedNumbers = numbers.toReversed();
// console.log(reversedNumbers); // [30, 50, 10, 40]
// console.log(numbers);

// ✅ toSpliced() – Removes/adds elements and returns a new array
// const splicedNumbers = numbers.toSpliced(1, 3); // Removes 2 elements from index 1
// console.log(splicedNumbers); // [40, 30]
// console.log(numbers); // [40, 10, 50, 30] (unchanged)

// const lastIndex = numbers.findLastIndex((num) => num < 20);
// const firstIndex = numbers.findIndex((num) => num < 20);
// console.log(lastIndex, firstIndex); // 1 (Last occurrence of 10)