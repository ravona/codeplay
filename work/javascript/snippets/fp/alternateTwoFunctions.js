const alternateTwoFunctions = (fn1, fn2) => {
  return (...args) => {
    fn1(...args);
    [fn1, fn2] = [fn2, fn1];
  };
};
