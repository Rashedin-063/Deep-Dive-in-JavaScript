const nested = [1, 2, [3, 4], [5, 6]];

const flatArr = nested.flat()

// console.log(flatArr);

const deep = [1, [2, [3, [4]]]];

console.log(deep.flat());      
// [1, 2, [3, [4]]] → flattens one level

console.log(deep.flat(2));     
// [1, 2, 3, [4]] → flattens two levels

console.log(deep.flat(Infinity)); 
// [1, 2, 3, 4] → fully flattened

