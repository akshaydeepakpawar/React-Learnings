import React, { useEffect, useState } from "react";

const BesicEffect = () => {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect is triggred");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default BesicEffect;
