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

let createNeastedList = function(inList, inStartLevel, inStartIndex) {
  let startLevel = inStartLevel || 0;
  let startIndex = inStartIndex || 0;

  let items = [];

  for (let i = startIndex; i < inList.length; i++) {
    let currentItem = inList[i];

// if the start level is smaller than the
        // if (currentItem.level > startLevel && items === startIndex) {
        //     items.push({
        //       children: createNeastedList(inList, startLevel + 1, i)
        //     });
        //     break;
        // }

    if (currentItem.level < startLevel) {
      break;
    }


    if (currentItem.level === startLevel) {

      items.push({
        level: currentItem.level,
        text: currentItem.text,
        children: createNeastedList(inList, startLevel + 1, i +1)
      });
    }
  }


  // if((items.length === 0) && (inList.length > 0) && (startIndex === 0)) {
  //   console.log("--kick", startLevel, startIndex )
  //   return createNeastedList(inList, startLevel + 1, startIndex)
  // }
  return items;
};

let process = createNeastedList(input, 1);

console.log(JSON.stringify(process, null, 2));
