## Hooks

### useCallback

useCallback is a hook that returns a memoized version of a callback function. It's useful when you want to prevent unnecessary re-renders of child components that depend on callback functions.

#### Use useCallback when:

- You're passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
- You have a function that's used in an effect's dependency array and you want to control when it changes.
- You're working with complex functions that are expensive to recreate on every render.

```typescript
// Example 1: Optimizing a child component render
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ChildComponent onIncrement={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
};

// Example 2: Stabilizing an effect dependency
const DataFetcher = ({ userId }) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    // Fetch data logic here
    fetch(`/api/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>{/_ Render data _/}</div>;
};

// Example 3: Memoizing an expensive computation function
const ExpensiveComponent = ({ data, threshold }) => {
  const expensiveFunction = useCallback(
    (item) => {
      // Some expensive computation
      return item.value > threshold;
    },
    [threshold]
  );

  return (
    <div>
      {data.map((item) => (
        <Item key={item.id} isImportant={expensiveFunction(item)} />
      ))}
    </div>
  );
};
```

### useMemo

useMemo is used to memoize expensive computations. It only recomputes the memoized value when one of its dependencies has changed.

#### Use useMemo when:

- You have computationally expensive operations that don't need to be re-run on every render.
- You want to avoid unnecessary re-renders of child components that depend on complex objects or arrays.
- You're creating a new object or array in your component and want to ensure referential equality between renders.

```typescript
// Example 1: Memoizing an expensive calculation
const PrimeCalculator = ({ maxNumber }) => {
  const primes = useMemo(() => {
    console.log("Calculating primes...");
    const result = [];
    for (let i = 2; i <= maxNumber; i++) {
      if (isPrime(i)) result.push(i);
    }
    return result;
  }, [maxNumber]);

  return <div>{primes.join(", ")}</div>;
};

// Example 2: Preventing unnecessary re-renders
const UserList = ({ users, filterCriteria }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => filterCriteria(user));
  }, [users, filterCriteria]);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Example 3: Maintaining referential equality
const MemoizedComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return {
      totalCount: data.length,
      activeCount: data.filter((item) => item.active).length,
      inactiveCount: data.filter((item) => !item.active).length,
    };
  }, [data]);

  return <ChildComponent processedData={processedData} />;
};
```

### useRef

useRef returns a mutable ref object that persists for the full lifetime of the component. It's commonly used to access DOM elements directly, but can also be used to store any mutable value that doesn't require a re-render when updated.

#### Use useRef when:

- You need to access or manipulate DOM elements directly.
- You want to store a mutable value that doesn't cause a re-render when it changes.
- You need to keep track of previous values or states without triggering re-renders.

```typescript
// Example 1: Memoizing an expensive calculation
const PrimeCalculator = ({ maxNumber }) => {
  const primes = useMemo(() => {
    console.log("Calculating primes...");
    const result = [];
    for (let i = 2; i <= maxNumber; i++) {
      if (isPrime(i)) result.push(i);
    }
    return result;
  }, [maxNumber]);

  return <div>{primes.join(", ")}</div>;
};

// Example 2: Preventing unnecessary re-renders
const UserList = ({ users, filterCriteria }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => filterCriteria(user));
  }, [users, filterCriteria]);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Example 3: Maintaining referential equality
const MemoizedComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return {
      totalCount: data.length,
      activeCount: data.filter((item) => item.active).length,
      inactiveCount: data.filter((item) => !item.active).length,
    };
  }, [data]);

  return <ChildComponent processedData={processedData} />;
};
```
