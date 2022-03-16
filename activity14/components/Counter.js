import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// we are exporting the default function Counter()
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState is returns an array of the value and function to change the value. useState takes an argument which is the default value
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  //when handleIncrement is clicked the page is rerendered and the setState rerenders the count plus one
  //updating the stat4e with it's current value plus one
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  //when handleDecrement is clicked the page is rerendered and the setState rerenders the count minus one
  //updating the state with it's current value minus one
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody : 
      count, handleDecrement, handleIncrement*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
