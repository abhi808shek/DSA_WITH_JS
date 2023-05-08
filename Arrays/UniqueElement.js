const array = [1, 1, 2, 3, 4, 2, 3, 4, 5,5];

// By Normal Way
const UniqueElement = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array[i] = 0;
        array[j] = 0;
      }
    }
  }
  array.forEach((element) => {
    if (element > 0) {
      console.log(element);
    }
  });
};

UniqueElement(array);

// Xor Approach
// const UniqueElement = (array) => {
//   let ans = 0;
//   for (let index = 0; index < array.length; index++) {
//     ans = ans ^ array[index];
//   }
//   console.log("ans", ans);
// };

// UniqueElement(array);

// Optimiized Approcach
// const UniqueElement = (array) => {
//  const element =  array.reduce((ans, currentValue) => {
//     ans = ans ^ currentValue;
//     return ans;
//   }, 0);
//   console.log("ans", element);
// };

// UniqueElement(array);
