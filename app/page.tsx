"use client";

import React, { useState } from "react";
import Link from "next/link";
import Countdown from "./components/Countdown";
import RotatingSquare from "./components/RotatingSquare";

const textOn = "underline text-[#c01101] animate-subtleGlow";
const textOff = "opacity-[35%]";

export default function Home() {
  const [textCurrent1, textState1] = useState(textOn); // text1 state
  const [textCurrent2, textState2] = useState(textOff); // text2 state
  const [dateCurrent, dateState] = useState("2025-01-31T00:00:00"); // countdown date state

  const toggleState = () => {
    textState1((prev) => (prev === textOn ? textOff : textOn)); // album
    textState2((prev) => (prev === textOff ? textOn : textOff)); // movie
    dateState((prev) =>
      prev === "2025-01-31T00:00:00"
        ? "2025-05-16T00:00:00"
        : "2025-01-31T00:00:00"
    ); // toggle function between release dates
  };

  return (
    <section className="grid justify-center place-content-center w-full h-[100dvh] text-[#c01101] select-none">
      <div className="md:py-10 py-4">
        <RotatingSquare />
      </div>

      <div className="animate-subtleGlow md:-mt-10">
        <p className="md:text-9xl text-6xl text-center z-50">
          HURRY
          <br />
          UP
          <br />
          TOMORROW
        </p>
      </div>

      <div className="flex justify-center py-2">
        <div className="pt-2 flex flex-row gap-4 md:text-lg text-md">
          <p className={`${textCurrent1} transition-all ease-in-out`}>Album</p>

          <p className={`${textCurrent2} transition-all ease-in-out`}>Movie</p>
        </div>
      </div>

      <div className="animate-subtleGlow md:pb-10 pb-4">
        <Countdown date={dateCurrent} />
      </div>

      <div
        onClick={toggleState}
        className="fixed z-20 cursor-pointer inset-0 flex justify-center items-center"
      ></div>

      <div className="fixed z-30 font-[Helvetica] animate-subtleGlow font-normal text-sm bottom-0 px-4 py-4">
        All media content, images, and assets are the property of{" "}
        <Link href="https://theweeknd.com/" target="_blank">
          The Weeknd
        </Link>
        , XO /{" "}
        <Link href="https://www.republicrecords.com/" target="_blank">
          Republic Records
        </Link>
        , and{" "}
        <Link href="https://www.universalmusic.com/" target="_blank">
          Universal Music Group
        </Link>
        .
        <br />
        No copyright infringement is intended.
      </div>
    </section>
  );
}
