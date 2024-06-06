# Functional Programming (FP)

### What is functional programming?

Functional programming is a programming paradigm where programs are constructed by composing independent functions together to produce some desired result.

Some well knows FP languages include: Clojure, Erlang, Haskell, and Scala

### What are the benefits or applying FP to your project?

Programs that are written in a functional style usually tend to be:

1. Cleaner
1. Shorter
1. Easier to understand
1. Easier to test

- Easier than projects written in procedural style or object-oriented (OOP)

This clear division of responsibility between our beloved employees on the production line, helps us to manage this factory. We'll come back to this example to see why.

---

### Which guidelines are to be followed according to FP?

- FP focuses on **_what_** should be done, rather than on **_how_** it should be done
- passing functions as parameters to other functions
- returning functions as a result of another function
- preferring pure functions
- preferring recursion over loops
- side effects free

1. Pure Function
   a function is pure if it fulfills the following 2 conditions:
   1. The function return values are identical for identical arguments
   2. The function application has no side effects

### Which qualities make ANY code a well written code?

- **_Modularity_** -
  When the functionality of your program is divided into independent modules (information hiding), that each of which contains exactly one aspect of the program's functionality (single responsibility principle), it is safer and easier to add, remove, edit or reuse that functionality, since changes in a module or function do not affect the rest of the code.

  In addition, modularity rewards us with the ability to apply reusability easily, which is the next quality of a well written project that worths mentioning.

- **_Reusability_** - Code reuse saves resources, time, and money.
  It eliminates redundancy by taking advantage of previously written code.
  Therefore, reusability decreases the risk of bugs and makes testing easier, because every time we add new code, we risk making mistakes.

- high cohesion - all the pieces in a module belong together
- low coupling - modules are independent of each other.
- separation of concerns - the parts of a program should overlap in functionality as little as possible
- information hiding - internal changes in a module shouldn't affect the rest of the system.

## JavaScript and FP

Is JavaScript a functional language?

No. While JavaScript CAN be written using FP style, it does allow us to write non-functional code.
It is possible to write FP JavaScript if we are careful enough to stick to its FP approved toolbox.
Therefore, it is important to get familiar with FP's theoretical concepts, in order to gain the benefits of this paradigm.

## Glossary

- programming paradigm
- **functions as first-class citizens** - When a programming language has functions as first-class citizens, that means you can do everything with functions that you can do with other objects. For example, you can store a function in a variable, you can pass it to a function, you can print it out, and so on. Functions must be first-class citizens in order to implement FP.

- **recursion** - Recursion refers to a function that calls itself at a certain point. Recursion is used in many algorithms to solve a wide range of problems.

  ```js
  const fact = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };

  console.log(fact(5)); // 120
  ```

- declarative programming
- imperative programming
- pure functions
- memoization
- higher order functions
- side effects - an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local scope
- lambda calculus
- spread / rest
- arrow functions
- currying
- idempotent
- closure - functions have access to the scope of their surrounding function. This access is called closure. Closure implements data-hiding using private variables. We use closures for memoization, creating modules.

```js
const makeAdder = (x) => (y) => x + y;

// add5 and add10 are both closures. They share the same function body definition, but store different lexical environments.

// In add5's lexical environment, x is 5
var add5 = makeAdder(5);
// In add10, lexical environment, x is 10
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```
