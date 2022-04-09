import React, { useState } from "react";
import "./app.css";

import Keyup from "./pages/keyup";
import Mouse from "./pages/mouse";
import NextTick from "./pages/nextTick";
import Screen from "./pages/screen";

type Pages = "keyup" | "screen" | "mouse" | "nextTick";

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>("keyup");

  return (
    <div>
      <div className="button-list">
        <button onClick={() => setCurrentPage("screen")}>监测窗口宽高</button>
        <button onClick={() => setCurrentPage("mouse")}>监测鼠标位置</button>
        <button onClick={() => setCurrentPage("keyup")}>监测按键情况</button>
        <button onClick={() => setCurrentPage("nextTick")}>nextTick</button>
      </div>
      <hr />
      <div className="pages">
        {currentPage === "keyup" ? <Keyup></Keyup> : null}
        {currentPage === "mouse" ? <Mouse></Mouse> : null}
        {currentPage === "screen" ? <Screen></Screen> : null}
        {currentPage === "nextTick" ? <NextTick></NextTick> : null}
      </div>
    </div>
  );
}

export default App;
