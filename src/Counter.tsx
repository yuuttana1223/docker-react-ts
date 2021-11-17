import React from "react";
import { useState } from "react";

export const Counter: React.VFC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = (): void => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};
