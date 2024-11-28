
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div className='grid justify-center place-content-center md:gap-y-20 gap-y-8 w-screen min-h-[100vh] text-[#c01101] select-none'>
      <div className=''>
        <p className='md:text-9xl text-6xl text-center'>HURRY<br/>UP<br/>TOMORROW</p>
      </div>

      <Countdown date={`2025-01-24T00:00:00`} />

      <div className='fixed font-[Helvetica] font-normal text-sm bottom-0 px-4 py-4'>All media content, images, and assets are the property of The Weeknd and XO Records.<br/>No copyright infringement is intended.</div>
    </div>
  );
}