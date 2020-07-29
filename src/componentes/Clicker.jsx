import React, { useState } from "react";
const Clicker = ({ cantidadClick }) => {
  const [count, setCount] = useState(0);

  const SumaNumeros = () => {
    setCount(count + 1);
    cantidadClick();
  };

  const RestaNumeros = () => {
    setCount(count - 1);
    cantidadClick();
  };

  const reset = () => {
    setCount(0);
    cantidadClick();
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="clicker border border-secondary rounded">
          <div className="clicker-display d-flex align-items-center bg-light text-secondary">
            <div className="mx-auto display-1">{count}</div>
          </div>
          <div className="clicker-button-panel d-flex flex-row">
            <button onClick={SumaNumeros} className="btn btn-success w-100">
              <i className="fa fa-plus fa-2x" />
            </button>
            <button onClick={reset} className="btn btn-warning w-100">
              <i className="fa fa-refresh fa-2x" />
            </button>
            <button onClick={RestaNumeros} className="btn btn-danger w-100">
              <i className="fa fa-minus fa-2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clicker;
