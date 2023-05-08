const array = [1, 2, 3, 4, 5];

// Optimized Solution
const secondLargest = (array) => {
  const sortedARray = array.sort((a, b) => b - a);
  console.log("sortedARray[1] is the Second Larget No: ", sortedARray[1]);
};

// secondLargest(array);
