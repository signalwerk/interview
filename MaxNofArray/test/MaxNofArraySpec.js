describe("Signalwerk", function() {
  var signalwerkFindMaxN = require("../src/signalwerk");

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
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort()).toEqual([15, 16, 17]);
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
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort()).toEqual([-1, -2, -3]);
    });
  });

  describe("Array with only two entries", function() {
    const data = [2, 3];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3)).toEqual(null);
    });
  });

  describe("Array with all the same entries", function() {
    const data = [2, 2, 2, 2];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort()).toEqual([2, 2, 2]);
    });
  });

  describe("Array with all the same negative entries", function() {
    const data = [-2, -2, -2, -2];
    it("when used with signalwerk", function() {
      expect(signalwerkFindMaxN(data, 3).sort()).toEqual([-2, -2, -2]);
    });
  });
});
