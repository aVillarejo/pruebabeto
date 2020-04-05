import React, { useState } from 'react';

export default function Prueba() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='container'>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>increase</button>
        <button onClick={() => setCounter(counter - 1)}>decrease</button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        p {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
