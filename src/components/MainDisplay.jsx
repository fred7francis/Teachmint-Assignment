// MainDisplay.jsx

import React from "react";
import OrderBoard from "./OrderBoard";
import OrderProgress from "./OrderProgress";

const MainDisplay = () => {
  return (
    <div className="main-display">
      <OrderBoard />
      <OrderProgress />
    </div>
  );
};

export default MainDisplay;
