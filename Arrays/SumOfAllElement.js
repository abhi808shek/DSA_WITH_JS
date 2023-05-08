const array = [1, 2, 3, 4, 5,6];


// Normal Method

// const sumOfAllElement = (array) => {
    // let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//   }
//   console.log("Total Sum is : ", sum);
// };

// sumOfAllElement(array);



// By In Built Function

const sumOfAllElement = (array) => {
 const sum = array.reduce((prevValue,currentValue)=>{
   return prevValue += currentValue;
 },0)
  console.log("Total Sum is : ", sum);
};

sumOfAllElement(array);