const onceAndAfter = (callOnce, callAfter) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      callOnce(...args);
    } else {
      callAfter(...args);
    }
  };
};
