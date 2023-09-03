import React, { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={() => setCount(count + 1)}>
            Primary action
          </button>
          <button className="btn btn-outline-secondary" type="button" onClick={() => setCount(0)}>
            Secondary action
          </button>
          <p>You clicked {count} times </p>
        </div>
      </div>
      
     
    </div>
  );
};
