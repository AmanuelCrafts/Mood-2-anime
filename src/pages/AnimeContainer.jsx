import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnimeList from "../components/AnimeList";
import SelectedMoodCard from "../components/EditMood";

const AnimeContainer = () => {
  const { emotion } = useParams();
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAnimeByEmotion = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
          params: {
            q: emotion, // Search by the emotion
            order_by: "score", // Order by score
            sort: "desc", // Highest scores first
            limit: 10, // Limit to 10 results
          },
        });
        setAnimeList(response.data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };

    fetchAnimeByEmotion();
  }, [emotion]);

  const handleNext = () => {
    if (currentIndex < animeList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 py-6 px-10">
      {/* Display the SelectedMoodCard at the top */}
      <SelectedMoodCard mood={emotion.toLowerCase()} />

      {animeList.length > 0 ? (
        <AnimeList
          animeList={animeList}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ) : (
        <p className="px-4">
          We're fetching the best movies to watch when you feel {emotion}...
          Hold tight!
        </p>
      )}
    </div>
  );
};

export default AnimeContainer;
