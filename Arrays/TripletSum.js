const array = [1, 2, 3, 4, 5];
const target = 10;

// Two Sum Count And Elements By Normal Way
const TripletSum = (array, target) => {
  const newArray = [];
  let count = 0;
  for (let index = 0; index < array.length - 2; index++) {
    for (let j = index + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[index] + array[j] + array[k] === target) {
          count++;
          newArray.push(array[index], array[j], array[k]);
        }
      }
    }
  }
  console.log("newArray", newArray);
  console.log("Count : ", count);
};

TripletSum(array, target);
