import { useState } from "react";
import useNextTick from "../../hooks/useNextTick";

function NextTick() {
  const [state, setState] = useState<number>(1);
  const [current, next, list] = useNextTick(state, setState);

  const change = () => {
    const randomNumber = Math.random() * 10;
    setState(v => v + 1 + parseInt(String(randomNumber)));
  };

  return (
    <div>
      <button onClick={change}>click</button>
      <p>current:{current}</p>
      <p>next:{next}</p>
      <p>list:{JSON.stringify(list)}</p>
    </div>
  );
}

export default NextTick;
