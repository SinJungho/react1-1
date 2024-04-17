import React, { useEffect, useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `총 ${count}번 만큼 증가했습니다.`;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
