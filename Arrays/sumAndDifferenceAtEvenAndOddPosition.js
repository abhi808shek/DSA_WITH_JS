const array = [1, 2, 3, 4, 5, 6];

// Normal Way
// const sumOfOddAndEvenIndicesAndDifference = (array) => {
//   let evenSum = 0;
//   let oddSum = 0;
//   let differnce;
//   for (let index = 0; index < array.length; index++) {
//     array[index] % 2 === 0
//       ? (evenSum += array[index])
//       : (oddSum += array[index]);
//   }
//   console.log("Even Sum is :", evenSum);
//   console.log("Odd Sum is :", oddSum);
//   differnce = evenSum - oddSum;
//   console.log("Difference is :", differnce);
// };

// sumOfOddAndEvenIndicesAndDifference(array);

// Optimized Code
// const sumOfOddAndEvenIndicesAndDifference = (array) => {
//   const evenSum = array.reduce((prvVal, currentValu) => {
//     if (currentValu % 2 === 0) {
//       prvVal += currentValu;
//     }
//     return prvVal;
//   }, 0);

//   const oddSum = array.reduce((prvVal, currentValu) => {
//     if (currentValu % 2 !== 0) {
//       prvVal += currentValu;
//     }
//     return prvVal;
//   }, 0);

//   const differnce = evenSum - oddSum;
//   console.log("Difference is :", differnce);
// };

// sumOfOddAndEvenIndicesAndDifference(array);



// More Optimized Code 
const sumOfOddAndEvenIndicesAndDifference = (array) => {
  const sums = array.reduce(
    (acc, currVal, index) => {
      if (index % 2 === 0) {
        acc.evenSum += currVal;
      } else {
        acc.oddSum += currVal;
      }
      return acc;
    },
    { evenSum: 0, oddSum: 0 }
  );

  const difference = sums.evenSum - sums.oddSum;
  console.log("Difference is :", difference);
};

sumOfOddAndEvenIndicesAndDifference(array);
