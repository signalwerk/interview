describe("Return the N biggest values of an array.", function() {
  var signalwerkFindMaxN = require("../src/signalwerk");
  // var signalwerkReduceFindMaxN = require("../src/signalwerk-reduce");
  var signalwerkReduceFindMaxN = require("../src/signalwerk-reduce-new");

  describe("Array with 18 entries", function() {
    const data = [
      0,
      17,
      11,
      12,
      13,
      14,
      1,
      2,
      -3,
      4,
      5,
      15,
      16,
      6,
      7,
      8,
      9,
      10
    ];
    const result = [15, 16, 17];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });

  describe("Array with 18 negative entries", function() {
    const data = [
      -100,
      -17,
      -11,
      -12,
      -13,
      -14,
      -1,
      -2,
      -3,
      -4,
      -5,
      -15,
      -16,
      -6,
      -7,
      -8,
      -9,
      -10
    ];
    const result = [-4, -3, -2, -1];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 4).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 4).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });

  describe("Array with only two entries", function() {
    const data = [2, 3];
    const result = [2, 3];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });

  describe("Array with all equal entries", function() {
    const data = [2, 2, 2, 2];
    const result = [2, 2, 2];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });

  describe("get only the biggest", function() {
    const data = [2, 2, 2, 200];
    const result = [200];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 1).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 1).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });

  describe("Array with equal negative entries", function() {
    const data = [-2, -2, -2, -2];
    const result = [-2, -2, -2];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(result);
    });
    it("when used with reduce", function() {
      expect(signalwerkReduceFindMaxN(data, 3).sort((a, b) => a - b)).toEqual(
        result
      );
    });
  });
});
