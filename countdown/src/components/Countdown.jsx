import { useState, useEffect } from "react";
import Clock from "/images/clock_9276045.png";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("Jan 1, 2027 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = targetDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      if (gap > 0) {
        setTimeLeft({
          days: Math.floor(gap / day),
          hours: Math.floor((gap % day) / hour),
          minutes: Math.floor((gap % hour) / minute),
          seconds: Math.floor((gap % minute) / second),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup the interval if the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div>
        <img src={Clock} alt="New Year clock icon" />
      </div>
      <h2>Countdown to New Year</h2>
      <div className="year">2027</div>
      <div className="countdown">
        <div id="day">{timeLeft.days}</div>
        <div id="hour">{timeLeft.hours}</div>
        <div id="minute">{timeLeft.minutes}</div>
        <div id="second">
          <span className="seconds">{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
