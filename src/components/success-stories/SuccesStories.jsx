"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "Thank you!",
    description:
      "I went on a fantastic first date with a beautiful and brainy Unjected yesterday! We met on the app after we both lost our partners to the jab.",
  },
  {
    id: 2,
    rating: 5,
    title: "Gamechanger",
    description:
      "I've had so many good conversations with a lot of amazing people on here. You'd never get that on Tinder or Hinge.",
  },
  {
    id: 3,
    rating: 5,
    title: "Thankful for this",
    description:
      "Its more than an app. It's a key to find new and better way for folks like us to live. I come here to find words of encourgement & support",
  },
  {
    id: 4,
    rating: 5,
    title: "Thankful for this",
    description:
      "Its more than an app. It's a key to find new and better way for folks like us to live. I come here to find words of encourgement & support",
  },
];

const SuccesStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center px-2 sm:px-4 md:px-6 lg:px-12 py-5 sm:py-10 md:py-12 lg:py-16 ">
      <div className="flex flex-col justify-center items-center gap-2 text-center mb-[20px]">
        <h2 className="font-bold sm:text-[28px] md:text-[32px] lg:text-[52px]">
          Our Success Stories
        </h2>
        <p className="font-normal sm:text-base md:text-lg lg:text-xl">
          Discover how our users found love and meaningful connections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {reviews.map((review, idx) => (
          <ReviewCard
            key={review.id}
            rating={review.rating}
            title={review.title}
            description={review.description}
            active={`${idx === currentIndex ? "active" : "non-active"}`}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 py-5">
        {reviews.map((reviews, idx) => (
          <button
            className={`${
              idx === currentIndex
                ? "active-btn"
                : "w-[42px] h-[4px] bg-[#E4E4E4] cursor-pointer"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SuccesStories;
