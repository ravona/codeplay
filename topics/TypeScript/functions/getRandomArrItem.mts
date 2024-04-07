import getRandomInt from "./getRandomInt.mjs";

export const getRandomArrItem = (arr : unknown[]) => {
  const randomNum = getRandomInt(arr.length);
  return arr[randomNum];
};
