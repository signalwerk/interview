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

let flatToTree = function(list, inIndex, inStartLevel, inTree) {
  // set defaults
  let index = inIndex || 0;
  let level = inStartLevel || 0;
  let tree = inTree || [];

  for (let i = index; i < list.length; i++) {
    let currentItem = list[i];

    // if the level decreases
    if (currentItem.level < level) {
      index = i - 1;
      break;
    }

    // add item if right level
    if (currentItem.level === level) {
      tree.push({
        level: currentItem.level,
        text: currentItem.text,
        children: []
      });
    }

    // if level increases we ned to append the children
    if (currentItem.level > level) {
      let children = flatToTree(list, i, level + 1, []);

      i = children.index;

      if (!tree.length) {
        tree.push({ children: [] });
      }

      // append children we get from the rutine
      tree[tree.length - 1].children.push(...children.tree);
    }

    index = i;
  }

  return {
    tree,
    index
  };
};

module.exports = flatToTree;

// let process = flatToTree(input).tree;

// console.log(JSON.stringify(process, null, 2));
