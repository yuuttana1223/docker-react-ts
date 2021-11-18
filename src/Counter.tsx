import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { render } from "react-dom";

export const Counter: React.VFC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = (): void => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(10);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  // Non Null Assertion Operator
  // const ref = useRef<HTMLInputElement>(null!);
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = (): void => {
    ref.current?.focus();
  };

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </>
  );
};
