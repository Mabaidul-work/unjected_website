import Image from "next/image";
import React from "react";
import heroImage from "../../assets/hero-image.png";

const HeroImageSection = () => {
  return (
    <div className="relative w-full">
      <Image
        className="flex items-center justify-center"
        src={heroImage}
        height={"100%"}
        alt="hero-image"
        width={"100%"}
      />
      <div className="absolute bottom-4 md:bottom-8 lg:bottom-20 xl:bottom-36 px-auto text-white text-center min-w-[15rem] sm-w-[21rem]  w-[100%]  flex justify-center items-center flex-col">
        <h1 className="text-md sm:text-[32px] font-bold md:text-[48px] lg:text-[56px] xl:text-[68px] max-w-52 md:max-w-xl lg:max-w-4xl xl:max-w-7xl">
          The World's First <span className="text-[#F7A293]">Unvaccinated</span>{" "}
          Platform
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-60 md:max-w-xl lg:max-w-4xl">
          Love, Friendship and Community connections since 2021
        </p> 
      </div>
    </div>
  );
};
export default HeroImageSection;
