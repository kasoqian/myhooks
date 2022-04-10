import { useEffect, useState } from "react";

function useCountDown(DTime: number) {
  const [delayTime, setDelayTime] = useState(DTime);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (delayTime > 0) {
        setDelayTime(time => {
          if (time === 1) {
            setStatus(true);
          }
          return time - 1;
        });
      }
    }, 1000);
  }, [delayTime]);

  return [delayTime, status];
}

export default useCountDown;
