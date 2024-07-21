// Challenge 1

const arr1 = [1, 2, 3, 4, 5];

arr1.reverse();
arr1.unshift(6);
arr1.push(0);

console.log(arr1);

// Challenge 2

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9, 10];

// Solution1

const solution1 = arr2.slice(0, 4).concat(arr3);
console.log(solution1);

const solution2 = [...arr2, ...arr3];
solution2.splice(4, 1);
console.log(solution2);
