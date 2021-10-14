import { longString } from "../../data.mjs";

const formatStory = (string) => {
  const storySplitByPunctuation = string.split(/(?<=[^\w\s]\s)/g);

  const result = storySplitByPunctuation.reduce((chunks, chunk) => {
    return [...chunks, chunk];
  }, []);

  return result;
};

console.log(formatStory(longString));
