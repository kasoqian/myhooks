import useScreen from "../../hooks/useScreen";

function Screen() {
  const [width, height] = useScreen();
  return (
    <div>
      width:{width} height:{height}
    </div>
  );
}

export default Screen;
