import React, { useState } from "react";
import "./styles.css";
import Header from "./componentes/Header";
import Clicker from "./componentes/Clicker";

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  const cantidadClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <Header clickCount={clickCount} />
      <Clicker cantidadClick={cantidadClick} />
    </div>
  );
}
