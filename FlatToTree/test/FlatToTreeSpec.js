describe("Return the N biggest values of an array.", function() {
  var flatToTree = require("../src/signalwerk");

  describe("Flat Array to ", function() {
    const data = [
      {
        level: 1,
        text: "01 - Title Level 1"
      },
      {
        level: 2,
        text: "02 - Title Level 2"
      },
      {
        level: 2,
        text: "03 - Title Level 2"
      },
      {
        level: 3,
        text: "04 - Title Level 3"
      },
      {
        level: 2,
        text: "05 - Title Level 2"
      },
      {
        level: 1,
        text: "06 - Title Level 1"
      },
      {
        level: 2,
        text: "07 - Title Level 2"
      },
      {
        level: 1,
        text: "08 - Title Level 1"
      },
      {
        level: 1,
        text: "09 - Title Level 1"
      }
    ];
    const result = [
      {
        children: [
          {
            level: 1,
            text: "01 - Title Level 1",
            children: [
              {
                level: 2,
                text: "02 - Title Level 2",
                children: []
              },
              {
                level: 2,
                text: "03 - Title Level 2",
                children: [
                  {
                    level: 3,
                    text: "04 - Title Level 3",
                    children: []
                  }
                ]
              },
              {
                level: 2,
                text: "05 - Title Level 2",
                children: []
              }
            ]
          },
          {
            level: 1,
            text: "06 - Title Level 1",
            children: [
              {
                level: 2,
                text: "07 - Title Level 2",
                children: []
              }
            ]
          },
          {
            level: 1,
            text: "08 - Title Level 1",
            children: []
          },
          {
            level: 1,
            text: "09 - Title Level 1",
            children: []
          }
        ]
      }
    ];
    it("when used with signalwerk", function() {
      expect(flatToTree(data).tree).toEqual(result);
    });
  });
});
