import { Children, useState } from "react";

function SlowComponent() {
  // If this is too slow on your matching, reduce the `length`
  const words = Array.from({ length: 100 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

      {children}
    </div>
  );
}

export default function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );

  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}

//! NOTE
// When React comes to 'Test' component, it immediately creates 'SlowComponent' (as it's children prop of 'Counter') before re-render of 'Counter' component. When 'Counter' re-renders, it doesn't affect on its children props. This is some kind of optimization trick by passing element as children props.
