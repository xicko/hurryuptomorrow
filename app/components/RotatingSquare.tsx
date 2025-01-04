import Image from "next/image";

const RotatingCube = () => {
  return (
    <div className="md:fixed md:mb-0 -mb-10 md:mt-0 -mt-11 z-[-50px] md:top-12 md:left-auto md:right-8 flex justify-center items-center animate-fadeInOut">
      {/* Perspective Container */}
      <div className="relative md:w-[300px] md:h-[300px] w-[150px] h-[150px] perspective">
        {/* Rotating Cube */}
        <div className="absolute w-full h-full animate-rotateY transform-style-preserve">
          {/* Front Side - First Image */}
          <div className="absolute w-full h-full transform rotate-y-0">
            <Image
              src="/backalt.webp"
              alt="Front Image"
              width={1000}
              height={1000}
              objectFit="cover"
              className="rounded-lg"
              draggable="false"
            />
          </div>
          {/* Back Side - Second Image */}
          <div className="absolute w-full h-full transform rotate-y-180 backface-hidden">
            <Image
              src="/front.webp"
              alt="Back Image"
              width={1000}
              height={1000}
              objectFit="cover"
              className="rounded-lg"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;
