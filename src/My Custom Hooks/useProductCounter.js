import { useState } from "react";

export default function useProductCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }
  function decrement() {
    setCount((previousCount) => {
      if (previousCount > 0) {
        return previousCount - 1;
      }
      return 0;
    });
  }
  return { count, increment, decrement };
}
