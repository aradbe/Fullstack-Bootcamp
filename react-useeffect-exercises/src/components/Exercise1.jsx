import { useState, useEffect } from "react";

function Exercise1() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Exercise1;
