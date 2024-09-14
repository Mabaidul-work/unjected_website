import Image from "next/image";
import React from "react";

const ImageCard = ({ imageUrl, description, px, py }) => {
  return (
    <div
      className={`flex justify-center items-center bg-[#F2F2F2] rounded-[28px] max-w-[314px]`}
    >
      {imageUrl === "" ? (
        <p className={`px-[${px}] py-[${py}]  px-4 py-5 text-xs sm:text-sm md:text-base lg:text-xl font-normal md:font-[500]`}>{description}</p>
      ) : (
        <Image
          src={imageUrl}
          alt={description}
          width={"100%"}
          height={"100%"}
        />
      )}
    </div>
  );
};

export default ImageCard;
