const array = [1, 3, 4, 56, 33, 3, 56];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Normal Way
// const checkArrayIsSortedOrNot = (array) => {
//   let isSorted = false;
//   for (let index = 0; index < array.length - 1; index++) {
//     if (array[index] < array[index + 1]) {
//       isSorted = true;
//     } else {
//       return (isSorted = false);
//     }
//   }
//   return isSorted;
// };
// const sortedOrNot = checkArrayIsSortedOrNot(array);
// if (sortedOrNot) {
//   console.log("Array Is Sorted");
// } else {
//   console.log("Array Is Not Sorted");
// }



// Inbuilt Feature and Optimized Code

const isSorted = (array) => {
  return array.every((element, index) => {
    if (index === 0) {
      return true;
    }
    return element >= array[index - 1];
  });
};

const sortedOrNot = isSorted(array);
if (sortedOrNot) {
  console.log("Array Is Sorted");
} else {
  console.log("Array Is Not Sorted");
}