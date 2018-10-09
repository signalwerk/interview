let findMaxN = (data, count) =>
  data.slice(count).reduce((accumulator, currentValue) => {
    if (accumulator[count - 1] <= currentValue) {
      return accumulator
        .concat(currentValue)
        .sort((a, b) => b - a)
        .slice(0, count);
    }

    return accumulator;
  }, data.slice(0, count).sort((a, b) => b - a));

module.exports = findMaxN;
