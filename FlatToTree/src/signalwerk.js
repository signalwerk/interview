// let flatToTree = (data, count) => {

let input = [
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

let createNeastedList = function(inList) {
  // if you just input a list
  if (Array.isArray(inList)) {
    return createNeastedList({
      list: inList,
      processedList: [],
      deepCount: 0,
      startLevel: 1
    });
  }

  let list = inList.list;
  let deepCount = inList.deepCount;
  let startLevel = inList.startLevel;
  let processedList = inList.processedList;

  for (let i = deepCount; i < list.length; i++) {
    console.log("------------------- process item: ", i);

    let currentItem = list[i];

    console.log(
      `                                   --- currentItem.level: ${
        currentItem.level
      }, startLevel: ${startLevel}`
    );

    if (currentItem.level < startLevel) {
      deepCount = i - 1;
      break;
    }

    if (currentItem.level === startLevel) {
      processedList.push({
        level: currentItem.level,
        text: currentItem.text
      });
    }

    if (currentItem.level > startLevel) {
      console.log("                                   --- go deep");
      let children = createNeastedList({
        list,
        processedList: [],
        deepCount: i,
        startLevel: startLevel + 1
      });

      i = children.deepCount;
      console.log(
        "                                   --- depp count",
        children.deepCount
      );
      processedList.push({
        children: children.processedList
      });
    }

    deepCount = i;
  }

  // console.log(
  //   "------------------------------------------ startLevel",
  //   startLevel
  // );

  return {
    list,
    processedList,
    deepCount,
    startLevel
  };
};

//   return { list: processedList, deepCount: addedItems };
//
//
//
//   let processedList = [];
//   let addedItems = 0;
//
//   for (let i = startAtIndex; i < flatList.length; i++) {
//     let currentItem = flatList[i];
//     if (currentItem.level > startLevel) {
//       let children = createNeastedList(
//         { list: flatList, deepCount: addedItems },
//         startLevel + 1,
//         i
//       );
//       addedItems = addedItems + children.deepCount;
//
//       processedList.push({
//         children: children.list
//       });
//     }
//     if (currentItem.level === startLevel) {
//       processedList.push({
//         level: currentItem.level,
//         text: currentItem.text
//       });
//     }
//
//     i = i + addedItems;
//   }
//
//   return { list: processedList, deepCount: addedItems };
// };

let process = createNeastedList(input);

console.log(JSON.stringify(process.processedList, null, 2));
