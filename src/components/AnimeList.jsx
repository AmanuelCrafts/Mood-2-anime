import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList, currentIndex, onNext, onPrevious }) => {
  return (
    <div className="flex flex-col items-center">
      <AnimeCard anime={animeList[currentIndex]} />
      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#a526ff] hover:bg-[#8c20d4] text-white"
          }`}
        >
          ⬅️ Back
        </button>
        <button
          onClick={onNext}
          disabled={currentIndex === animeList.length - 1}
          className={`px-4 py-2 rounded ${
            currentIndex === animeList.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#a526ff] hover:bg-[#8c20d4] text-white"
          }`}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default AnimeList;
