const mySome = (collection: any[], predicate: any): boolean => {
  const predicateHandlers = {
    function: (pred: any) => {
      for (let i = 0; i < collection.length; i++) {
        if (pred(collection[i], collection)) return true;
      }
      return false;
    },

    object: (pred: any) => {
      for (let i = 0; i < collection.length; i++) {
        if (
          Object.entries(pred).every(([key, val]) => collection[i][key] === val)
        ) {
          return true;
        }
      }
      return false;
    },

    array: (pred: any) => {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][pred[0]] === pred[1]) return true;
      }
      return false;
    },

    string: (pred: any) => {
      for (let i = 0; i < collection.length; i++) {
        if (Boolean(collection[i][pred])) return true;
      }
      return false;
    },
  };

  const predicateType = Array.isArray(predicate) ? "array" : typeof predicate;
  const handler =
    predicateHandlers[predicateType as keyof typeof predicateHandlers];

  return handler ? handler(predicate) : false;
};

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
];

console.log(mySome(users, { user: "barney", active: false })); // false
console.log(mySome(users, ["active", false])); // true
console.log(mySome(users, "active")); // true
