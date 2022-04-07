import useMouse from "../../hooks/useMouse";

function Mouse() {
  const [x, y] = useMouse();

  return (
    <div>
      x:{x} y:{y}
    </div>
  );
}

export default Mouse;
