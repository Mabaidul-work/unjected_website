import React from 'react';

const TwoSectionLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-16 md:px-20 mt-5">
    
      <div className="flex-1 flex flex-col p-4 md:p-8">
        <p className="text-xs md:text-sm lg:text-base font-bold mb-2 text-[#F7A293]">Our Mission</p>
        <p className="text-3xl md:text-4xl font-bold">
          Make value-based connections on Unjected
        </p>
      </div>

      
      <div className="flex-1 flex flex-col items-center justify-center p-2 px-4 md:p-8">
        <p className="text-base mb-2  md:text-left">
          Unjected is built on creating health-conscious relationships with those who share like-minded values and the convictions to remain unvaccinated.
        </p>
        <p className=" md:text-left">
          Our advanced algorithm delivers matches that are not just close, but aligned with your desires.
        </p>
      </div>
    </div>
  );
};

export default TwoSectionLayout;
