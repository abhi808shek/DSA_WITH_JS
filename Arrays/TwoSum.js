const array = [1, 2, 3, 4, 5];
const target = 5;

// Two Sum Count And Elements By Normal Way
const TwoSum = (array, target) => {
  const newArray = [];
  let count = 0;
  for (let index = 0; index < array.length - 1; index++) {
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] + array[j] === target) {
        count++;
        newArray.push(array[index], array[j]);
      }
    }
  }
  console.log("newArray", newArray);
  console.log(" : ", count);
};

TwoSum(array, target);
