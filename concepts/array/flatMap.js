// the flatMap method
const users = [
  { name: 'Alice', hobbies: ['Reading', 'Cooking'] },
  { name: 'Bob', hobbies: ['Gaming'] },
  { name: 'Eve', hobbies: ['Hacking', 'Blogging', 'Painting'] },
];

const hobbyLists = users.map((user) => user.hobbies);
// => [['Reading', 'Cooking'], ['Gaming'], ['Hacking', 'Blogging', 'Painting']]

// still there is a nested array, so we need to flatten them
// const allHobbies = users.map((user) => user.hobbies).flat();
// => ['Reading', 'Cooking', 'Gaming', 'Hacking', 'Blogging', 'Painting']

// we can achieve this result by simply using flatMap method
const allHobbies = users.flatMap((user) => user.hobbies);

console.log(allHobbies)

