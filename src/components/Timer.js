import { useEffect } from "react";

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

function Timer({ secondsRemaining, dispatch }) {
  const mins = leftFillNum(Math.floor(secondsRemaining / 60), 2);
  const seconds = leftFillNum(secondsRemaining % 60, 2);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins}:{seconds}
    </div>
  );
}

export default Timer;
