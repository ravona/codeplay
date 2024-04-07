const once = (fn) => {
  return (...args) => {
    fn && fn(...args);
    fn = null;
  };
};
