import React from "react";
import friendsImage01 from "../../assets/bento-grid/Frame 1171282975.png";
import friendsImage02 from "../../assets/bento-grid/Frame 1171282981.png";
import iPhone15pro from "../../assets/bento-grid/iPhone-5-Pro-Black-Titanium-Mockup-Portrait.png";
import photoCollage1 from "../../assets/bento-grid/Rectangle 40711.png";
import photoCollage4 from "../../assets/bento-grid/Frame 1171282976.png";
import friendsImage03 from "../../assets/bento-grid/image 78.png";
import ImageCard from "./ImageCard";

function ResponsiveLayout() {
  return (
    <div className=" p-2 sm:p-2 md:p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col items-center justify-between gap-10 xl:gap-4 h-full">
            <ImageCard
              imageUrl={""}
              description="Expand your circle,  one friend at a time"
              px="39px"
              py="33px"
            />
            <ImageCard imageUrl={friendsImage01} description="" px="" py="" />
            <ImageCard imageUrl={friendsImage02} description="" px="" py="" />
          </div>
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 h-full">
            <ImageCard
              imageUrl={iPhone15pro}
              description=""
              px="39px"
              py="21px"
            />
            <ImageCard
              imageUrl={""}
              description="Meet friends, share laughs - Unjected is your social hub"
              px="39px"
              py="33px"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  gap-4 xl:gap-4 h-full">
          <div className="flex flex-col items-center justify-between gap-10">
            <ImageCard
              imageUrl={photoCollage1}
              description=""
              px="39px"
              py="33px"
            />
            <ImageCard
              imageUrl={""}
              description="Switch to dating and find your match"
              px=""
              py=""
            />
            <ImageCard imageUrl={photoCollage4} description="" px="" py="" />
          </div>
          <div className="flex flex-col items-center justify-between gap-2 lg-4">
            <ImageCard
              imageUrl={""}
              description="Discover true romance with Unjected’s dating possibilities."
              px="39px"
              py="21px"
            />
            <ImageCard
              imageUrl={friendsImage03}
              description=""
              px="39px"
              py="33px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
