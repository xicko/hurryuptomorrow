"use client";

import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

interface CountdownProps {
  date: string;
}

interface TimeLeft {
  years: number;
  days: number;
  hours: number;
  min: number;
  sec: number;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const calculateCountdown = (endDate: string): TimeLeft | false => {
    const now = DateTime.now().setZone("America/New_York");
    const end = DateTime.fromISO(endDate, { zone: "America/New_York" });

    const diff = end.diff(now, [
      "years",
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);

    if (diff.toMillis() <= 0) return false;

    return {
      years: Math.floor(diff.years),
      days: Math.floor(diff.days),
      hours: Math.floor(diff.hours),
      min: Math.floor(diff.minutes),
      sec: Math.floor(diff.seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    // Immediately calculate initial time left
    const initialTimeLeft = calculateCountdown(date);
    return (
      initialTimeLeft || {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
      }
    );
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const updateCountdown = () => {
      const dateValue = calculateCountdown(date);
      dateValue ? setTimeLeft(dateValue) : clearInterval(interval);
    };

    updateCountdown();
    interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const addLeadingZeros = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 place-self-center m-2">
      <span className="inline-block md:mb-0 mb-8">
        <span className="mx-5 flex flex-col">
          <strong className="md:text-9xl text-6xl">
            {addLeadingZeros(timeLeft.days)}
          </strong>
          <span className="md:text-2xl text-lg">
            {timeLeft.days === 1 ? "Day" : "Days"}
          </span>
        </span>
      </span>

      <span className="inline-block md:mb-0 mb-8">
        <span className="mx-5 flex flex-col">
          <strong className="md:text-9xl text-6xl">
            {addLeadingZeros(timeLeft.hours)}
          </strong>
          <span className="md:text-2xl text-lg">Hours</span>
        </span>
      </span>

      <span className="inline-block">
        <span className="mx-5 flex flex-col">
          <strong className="md:text-9xl text-6xl">
            {addLeadingZeros(timeLeft.min)}
          </strong>
          <span className="md:text-2xl text-lg">Min</span>
        </span>
      </span>

      <span className="inline-block">
        <span className="mx-5 flex flex-col">
          <strong className="md:text-9xl text-6xl">
            {addLeadingZeros(timeLeft.sec)}
          </strong>
          <span className="md:text-2xl text-lg">Sec</span>
        </span>
      </span>
    </div>
  );
};

Countdown.defaultProps = {
  date: new Date().toISOString(),
};

export default Countdown;
