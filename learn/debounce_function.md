### What is a debounce function?

- When to use it?
- How does it work?
- Give an example of a debounce function

<details>
  <summary>Answer</summary>
  
A debounce function is a higher-order function that limits the rate at which a function can fire. It's useful when you want to ensure that time-consuming tasks don't fire so often that they hurt performance.

**When to use:**

- Handling frequent events like scrolling, resizing, or keypress
- Limiting API calls in search inputs
- Preventing multiple form submissions

**How it works:**

- When the debounced function is called, it sets a timer.
- If the function is called again before the timer expires, the timer is reset.
- The original function only executes after the timer expires without being reset.

</details>
