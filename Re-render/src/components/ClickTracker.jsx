import React, { useRef } from 'react';

const ClickTracker = () => {
  const clickCountRef = useRef(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    console.log(`Clicked ${clickCountRef.current} times`);
  };

  return (
    <div>
      <p>Click the button and check the console for count.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickTracker;
