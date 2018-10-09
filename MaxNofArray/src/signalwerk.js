// get the n biggest values of an array
let findMaxN = (data, count) => {
  // the input is already the result
  if (data.length <= count) {
    return data;
  }

  let results = []; // the biggest values of data
  let resultsMinIndex = 0; // in the results array this is the item with the lowest value

  // set new resultsMinIndex
  let findResultsMinIndex = () => {
    resultsMinIndex = 0;
    results.forEach((result, index) => {
      if (results[index] < results[resultsMinIndex]) {
        resultsMinIndex = index;
      }
    });
  };

  // init: copy first n elements to result array
  results = data.slice(0, count);

  // find the resultsMinIndex of the initial elements
  findResultsMinIndex();

  // loop each data entry
  data.slice(count).forEach(item => {
    // compare to the lowest result
    if (results[resultsMinIndex] < item) {
      results[resultsMinIndex] = item;
      // now set the new resultsMinIndex
      findResultsMinIndex();
    }
  });

  return results;
};

module.exports = findMaxN;
