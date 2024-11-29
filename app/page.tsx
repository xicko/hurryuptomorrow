import Link from "next/link";
import Countdown from "./components/Countdown";
import RotatingSquare from "./components/RotatingSquare";

export default function Home() {
  return (
    <section className="grid justify-center place-content-center md:gap-y-20 gap-y-8 w-full h-[100dvh] text-[#c01101] animate-subtleGlow select-none">
      
      <RotatingSquare />
      
      
      <p className="md:text-9xl text-6xl text-center z-50">
        HURRY
        <br />
        UP
        <br />
        TOMORROW
      </p>

      <Countdown date={`2025-01-24T00:00:00`} />

      <div className="fixed font-[Helvetica] font-normal text-sm bottom-0 px-4 py-4">
        All media content, images, and assets are the property of <Link href="https://theweeknd.com/" target="_blank">The Weeknd</Link>, XO Records, <Link href='https://www.republicrecords.com/' target="_blank">Republic Records</Link>, and <Link href='https://www.universalmusic.com/' target="_blank">Universal Music Group</Link>.
        <br />
        No copyright infringement is intended.
      </div>
    </section>
  );
}
