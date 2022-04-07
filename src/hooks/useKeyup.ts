import { useEffect, useState } from "react";

interface UseKeyup {
  (key: string, callback: Function): string;
}

const useKeyup: UseKeyup = (key, callback) => {
  const [currentKey, setKey] = useState<string>("");

  function keyUp(e: KeyboardEvent) {
    setKey(e.key);
    if (e.key?.toUpperCase() === key.toUpperCase()) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  }, []);

  return currentKey;
};

export default useKeyup;
