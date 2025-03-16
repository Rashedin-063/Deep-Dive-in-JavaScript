const numbers = [10, 25, 40, 55];
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const words = ['hello', 'world'];

// 1. findIndex()
console.log(numbers.findIndex((num) => num > 30)); // 2 (this will return the first index value that matches the condition)

// 2. map()
console.log(numbers.map((num) => num * 2)); // [20, 50, 80, 110]

// 3. filter()
console.log(numbers.filter((num) => num > 20)); // [25, 40, 55]

// 4. reduce()
console.log(numbers.reduce((sum, num) => sum + num, 0)); // 130

// 5. forEach()
numbers.forEach((num) => console.log(num * 2)); // 20, 50, 80, 110 (the difference between the forEach and map function is that map returns something whereas forEach does't return anything)

// 6. find()
console.log(users.find((user) => user.id === 2)); // { id: 2, name: "Bob" }

// 7. some()
console.log(numbers.some((num) => num > 50)); // true (will return true if any of the value matches the condition)

// 8. every()
console.log(numbers.every((num) => num > 5)); // true (will return true if every one of the values matches the condition)

// 9. sort()
console.log(numbers.sort((a, b) => a - b)); // [10, 25, 40, 55]
console.log(numbers.sort((a, b) => b - a)); // [44, 40, 25, 10]

/**
 * If the result of a - b (or b - a) is greater than 0 (positive), the order of the elements is reversed, meaning b is placed before a.
 
 * If the result of a - b (or b - a) is less than 0 (negative), the order remains as is, meaning a is placed before b.

 * If the result of the comparison is 0, the order of a and b remains unchanged relative to each other.
 */

// 10. flatMap()
console.log(words.flatMap((word) => word.split('')));
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// 11. fill()
console.log(new Array(5).fill(0)); // [0, 0, 0, 0, 0]

// 12. copyWithin()
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
