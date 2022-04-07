import { useEffect, useState } from "react";

function useScreen() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const reSize = (e: UIEvent) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", reSize);

    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, []);

  return [width, height];
}

export default useScreen;
