import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnimeList from "../components/AnimeList";
import SelectedMoodCard from "../components/EditMood";

const AnimeContainer = () => {
  const { emotion } = useParams();
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeByEmotion = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
          params: {
            q: emotion,
            order_by: "score",
            sort: "desc",
            limit: 10,
          },
        });
        setAnimeList(response.data.data);
      } catch (error) {
        setError("Failed to fetch anime. Please try again later.");
      } finally {
        setLoading(false);
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

  useEffect(() => {
    const capitalizedEmotion =
      emotion.charAt(0).toUpperCase() + emotion.slice(1).toLowerCase();
    document.title = `${capitalizedEmotion} - Mood to Anime`;
  }, [emotion]);

  return (
    <div className="w-full flex flex-col items-center gap-6 py-6 px-10">
      <SelectedMoodCard mood={emotion.toLowerCase()} />

      {loading ? (
        <p className="px-4">Fetching anime based on your mood...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : animeList.length > 0 ? (
        <AnimeList
          animeList={animeList}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ) : (
        <p className="px-4">
          We couldn't find any anime for the emotion: {emotion}. Try another
          mood.
        </p>
      )}
    </div>
  );
};

export default AnimeContainer;
