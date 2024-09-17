import React, { useState, useEffect } from "react";

export default function Timer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("November 4, 2024 16:00:00 GMT+0100").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[20px] flex justify-between items-center lg:p-3 p-2 lg:gap-10 gap-5 mb-10">
      <div className="flex flex-col justify-center items-center gap-2 bg-darkShadeC lg:h-20 lg:w-20 h-14 w-14 rounded-lg">
        <p className="lg:text-[20px] text-[20px] font-extrabold text-yellowShade">{timeLeft.days || '0'}</p>
        <p className="text-yellowShade lg:text-[7px] text-[7px] leading-[8px]">DAYS</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 bg-darkShadeC lg:h-20 lg:w-20 h-14 w-14 rounded-lg">
        <p className="lg:text-[20px] text-[20px] font-extrabold text-yellowShade">{timeLeft.hours || '0'}</p>
        <p className="text-yellowShade lg:text-[7px] text-[7px]">HOURS</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 bg-darkShadeC lg:h-20 lg:w-20 h-14 w-14 rounded-lg">
        <p className="lg:text-[20px] text-[20px] font-extrabold text-yellowShade">{timeLeft.minutes || '0'}</p>
        <p className="text-yellowShade lg:text-[7px] text-[7px]">MINUTES</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 bg-darkShadeC lg:h-20 lg:w-20 h-14 w-14 rounded-lg">
        <p className="lg:text-[20px] text-[20px] font-extrabold text-yellowShade">{timeLeft.seconds || '0'}</p>
        <p className="text-yellowShade lg:text-[7px] text-[7px]">SECONDS</p>
      </div>
    </div>
  );
};

