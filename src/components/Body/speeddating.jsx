

import React from 'react';
import Image from 'next/image';
import Meetimg1 from '../../public/images/meetimg1.png';
import Meetimg2 from '../../public/images/meetimg2.png';
import Meetimg3 from '../../public/images/meetimg3.png';

const Speeddating = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      
      <div className="text-left md:text-center max-w-full md:max-w-2xl mb-8">
        <p className="text-base md:text-lg mb-4 text-[#F7A293]">SPEED DATING</p>
        <p className="text-2xl md:text-3xl font-bold mb-4">
          Meet Genuine Connections: 
          <br /> Dive into Our Exciting Events!
        </p>
        <p className="text-sm">
          Step beyond the screen and connect in real life! Our exclusive events allow you to meet and mingle with other members in a relaxed, social setting.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg1}
            alt="Speak to new potential matches"
            className="w-50 h-50 object-cover mb-4"  
          />
          <p className="text-lg font-semibold">Speak to new potential matches</p>
          <p className="text-sm text-center">You’ll have various Events to attend to connect and get to know each other.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg2}
            alt="Video or voice - it’s your choice"
            className="w-50 h-50 object-cover mb-4"  
          />
          <p className="text-lg font-semibold">Video or voice - it’s your choice</p>
          <p className="text-sm text-center">Calls will always begin with voice. If the call is going well, take it to the next level with video.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg3}
            alt="You’re in control of each call"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold">You’re in control of each call</p>
          <p className="text-sm text-center">You decide what happens during each call. If you both like each other.</p>
        </div>
      </div>
    </div>
  );
};

export default Speeddating;
