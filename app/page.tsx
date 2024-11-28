import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <section className="grid justify-center place-content-center md:gap-y-20 gap-y-8 w-full h-[100dvh] text-[#c01101] select-none">
      <p className="md:text-9xl text-6xl text-center">
        HURRY
        <br />
        UP
        <br />
        TOMORROW
      </p>

      <Countdown date={`2025-01-24T00:00:00`} />

      <div className="fixed font-[Helvetica] font-normal text-sm bottom-0 px-4 py-4">
        All media content, images, and assets are the property of The Weeknd and
        XO Records.
        <br />
        No copyright infringement is intended.
      </div>
    </section>
  );
}
