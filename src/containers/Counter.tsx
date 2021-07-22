import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className='btn-counter'>
        <Button onClick={onIncrease}>Increase</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
      <div className='count'>{count}</div>
    </div>
  );
};

export default Counter;
