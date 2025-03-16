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
console.log(numbers.some((num) => num > 50)); // true

// 8. every()
console.log(numbers.every((num) => num > 5)); // true

// 9. sort()
console.log(numbers.sort((a, b) => a - b)); // [10, 25, 40, 55]

// 10. flatMap()
console.log(words.flatMap((word) => word.split('')));
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// 11. fill()
console.log(new Array(5).fill(0)); // [0, 0, 0, 0, 0]

// 12. copyWithin()
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
