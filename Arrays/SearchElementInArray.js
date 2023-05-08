const array = [1, 3, 4, 56, 33, 3];
const key = 526;

// In Normal Way
// const findElementInAnArray = (array, key) => {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === key) {
//       return index;
//     }
//   }
//   return -1;
// };

// const isPresent = findElementInAnArray(array, key);

// console.log("Key is present or not : ", isPresent);



// Inbuilt Function
const isPresent = array.indexOf(key);
console.log("isPresent", isPresent);

