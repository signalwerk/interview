let findMaxN = (data, count) =>
  data.reduce(
    (accumulator, currentValue) =>
      accumulator
        .concat(currentValue)
        .sort((a, b) => a - b)
        .slice(0 - count),
    []
  );

module.exports = findMaxN;
