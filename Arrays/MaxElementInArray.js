const array = [13, 4, 56, 3, 6];

// Normal Way
// const maxElement = (array) => {
//   let maxElement = 0;

//   array.forEach((element) => {
//     if (element > maxElement) {
//       maxElement = element;
//     }
//   });
//   console.log("Max Element : ", maxElement);
// };

// maxElement(array);


// Inbuilt Function
const maxElement = (array) => {
  const maxElement = Math.max(...array);
  console.log("Max Element : ", maxElement);
};

maxElement(array);
