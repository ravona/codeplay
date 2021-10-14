import getRandomInt from "./getRandomInt.mjs";

export const getRandomArrItem = (arr) => {
  const randomNum = getRandomInt(arr.length);
  return arr[randomNum];
};
