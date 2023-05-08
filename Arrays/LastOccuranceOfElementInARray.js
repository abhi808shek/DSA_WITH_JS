const array = [1, 3, 4, 56, 33, 3, 56];
const key = 56;

// In Normal Way
// const LastOccuranceOfElementInAnArray = (array, key) => {
//   let lastOccurance;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === key) {
//       lastOccurance = index;
//     }
//   }
//   console.log("lastOccurance at Index is : ", lastOccurance);
// };

// LastOccuranceOfElementInAnArray(array, key);

// Inbuilt Function
const lastOccurance = array.lastIndexOf(key);

console.log("lastOccurance at Index is : ", lastOccurance);