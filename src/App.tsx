import React, { useState } from "react";
import "./app.css";
import useCountDown from "./hooks/useCountDown";

import Keyup from "./pages/keyup";
import Mouse from "./pages/mouse";
import NextTick from "./pages/nextTick";
import Screen from "./pages/screen";
import CountDown from "./pages/useCountDown";

type Pages = "keyup" | "screen" | "mouse" | "nextTick" | "countDown";

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>("keyup");

  return (
    <div>
      <div className="button-list">
        <button onClick={() => setCurrentPage("screen")}>监测窗口宽高</button>
        <button onClick={() => setCurrentPage("mouse")}>监测鼠标位置</button>
        <button onClick={() => setCurrentPage("keyup")}>监测按键情况</button>
        <button onClick={() => setCurrentPage("nextTick")}>nextTick</button>
        <button onClick={() => setCurrentPage("countDown")}>倒计时</button>
      </div>
      <hr />
      <div className="pages">
        {currentPage === "keyup" ? <Keyup></Keyup> : null}
        {currentPage === "mouse" ? <Mouse></Mouse> : null}
        {currentPage === "screen" ? <Screen></Screen> : null}
        {currentPage === "nextTick" ? <NextTick></NextTick> : null}
        {currentPage === "countDown" ? <CountDown></CountDown> : null}
      </div>
    </div>
  );
}

export default App;
