"use client";

import React from "react";
import Link from "next/link";
import Countdown from "./components/Countdown";
import RotatingSquare from "./components/RotatingSquare";

export default function Home() {
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

      <div className="animate-subtleGlow md:mt-10 mt-4 md:pb-10 pb-4">
        <Countdown date={"2025-05-16T00:00:00"} />
      </div>

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
