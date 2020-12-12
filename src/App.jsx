import React from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => {
  const throwError = () => {
    throw new Error();
  };

  return (
    <>
      <h1>EXAMPLE</h1>
      <button type="button" onClick={throwError}>
        Do not click
      </button>
    </>
  );
};

export default hot(App);
