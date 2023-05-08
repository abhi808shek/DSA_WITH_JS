const array = [1, 3, 4, 56, 33, 3, 56];
const key = 4;

// Normal Way
const strictlyGreaterThanKey = (array, key) => {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > key) {
      count++;
    }
  }
  return count;
};
const totalCount = strictlyGreaterThanKey(array, key);
console.log("Strictly Greater totalCount", totalCount);

// Optimized Solution
// const totalCount = array.reduce((count, element) => {
//   if (element > key) {
//     count++;
//   }
//   return count;
// }, 0);

// console.log("Strictly Greater totalCount", totalCount);
