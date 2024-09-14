
import React from 'react';
import Image from "next/image";
import Realimg1 from '../../public/images/realimg1.png'
import Realimg2 from '../../public/images/realimg2.png'
import Realimg3 from '../../public/images/realimg3.png'

const Realprofile = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)',
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={gradientStyle}
    >
      <div className="text-left md:text-center max-w-full md:max-w-2xl mb-8">
        <p className="text-base md:text-lg mb-4 text-[#F7A293]">Authenticity</p>
        <p className="text-2xl md:text-3xl font-bold mb-4">
          Real profiles, Real connections.
        </p>
        <p className="text-sm">
          Our rigorous checks create a secure environment for you to find and connect with authentic individuals.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-full max-w-6xl md:gap-0">
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg1}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg2}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg3}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Realprofile;
