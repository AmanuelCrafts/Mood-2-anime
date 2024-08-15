import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectedMoodCard from "../components/EditMood"; // Import the card component

const Home = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const navigate = useNavigate();

  const emotions = [
    "😊 HAPPY",
    "😢 SAD",
    "😠 ANGRY",
    "😆 EXCITED",
    "😌 RELAXED",
    "😐 BORED",
    "😲 SURPRISED",
    "😬 NERVOUS",
    "😨 SCARED",
    "😎 CONFIDENT",
    "😔 LONELY",
    "😍 IN LOVE",
    "😕 CONFUSED",
    "😤 DETERMINED",
    "😏 PROUD",
    "🙏 GRATEFUL",
    "🤞 HOPEFUL",
  ];

  const handleEmotionClick = (emotion) => {
    setCurrentMood(emotion);
    navigate(`/anime/${emotion}`);
  };

  useEffect(() => {
    document.title = "Home - Mood to Anime";
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-6">
      <div className="w-full px-10 md:px-40 lg:px-64 flex flex-col gap-4">
        <h1 className="text-4xl lg:text-6xl text-center font-black">
          Discover top-rated Animes based on your mood
        </h1>
        <p className="text-xl text-center">How are you feeling now?</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-4">
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => handleEmotionClick(emotion)}
            className="Btn"
          >
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
