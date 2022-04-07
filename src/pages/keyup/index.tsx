import useKeyup from "../../hooks/useKeyup";

function Keyup() {
  const enterEvent = () => {
    alert("检测按下enter，触发enter的回调事件");
  };

  const currentKey = useKeyup("enter", enterEvent);

  return <div>{currentKey}</div>;
}

export default Keyup;
