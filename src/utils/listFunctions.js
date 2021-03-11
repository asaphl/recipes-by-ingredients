export function createObjectFromList(list) {
  let obj = {};
  list.forEach((item) => (obj[item.ingredient] = item.amount));
  return obj;
}

export function convertObjectToList(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push({
      ingredient: key,
      amount: obj[key],
    });
  }
  return arr;
}

export function removeListAFromListB(listA, listB) {
  let objA = createObjectFromList(listA),
    objB = createObjectFromList(listB);
  for (let key in objA) {
    if (!objB[key]) objB[key] = 0;
    objB[key] -= objA[key];
    if (objB[key] === 0) delete objB[key];
  }
  return convertObjectToList(objB);
}

export function addListAToListB(listA, listB) {
  let objA = createObjectFromList(listA),
    objB = createObjectFromList(listB);
  for (let key in objA) {
    if (!objB[key]) objB[key] = 0;
    objB[key] += Math.ceil(objA[key]);
  }
  return convertObjectToList(objB);
}

export function missingItemsInList(items, list) {
  return removeListAFromListB(items, list)
    .filter((item) => item.amount < 0)
    .map((item) => {
      return {
        ingredient: item.ingredient,
        amount: Math.abs(item.amount),
      };
    });
}

export function isItemInList(item, list) {
  const listObj = createObjectFromList(list);
  return !listObj[item.ingredient] ? false : true;
}
