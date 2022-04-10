import useCountDown from "../../hooks/useCountDown";

function CountDown() {
  const [delayTime, status] = useCountDown(5);

  return (
    <div>
      <div>倒计时:{delayTime}s</div>
      <div>倒计时结束了吗?{status.toString()}</div>
    </div>
  );
}

export default CountDown;
