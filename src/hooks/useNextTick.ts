import { useEffect, useState } from "react";

function useNextTick<T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
): [currentValue: T, nextValue: T | null, History: T[]] {
  const [history, setHistory] = useState<T[]>([]);

  useEffect(() => {
    const result = history.concat(state);
    setHistory(result);
  }, [state]);

  return [history[history.length - 1], history[history.length - 2], history];
}

export default useNextTick;
