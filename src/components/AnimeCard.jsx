import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="max-w-2xl mx-auto bg-[#272935] shadow-lg rounded-lg overflow-hidden my-5">
      <div className="relative pb-[60%] overflow-hidden">
        {anime.images && anime.images.jpg.image_url ? (
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <p className="text-center text-gray-500 py-4">No image available</p>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{anime.title}</h2>
        <p className="text-gray-400 mb-1">
          <strong>Genre:</strong>{" "}
          {anime.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-gray-400 mb-1">
          <strong>Release Date:</strong> {anime.aired.from.slice(0, 10)}
        </p>
        <p className="text-gray-400 mb-1">
          <strong>Rating:</strong> {anime.score}
        </p>
        <p className="text-gray-400 mb-1">
          <strong>Duration:</strong> {anime.duration}
        </p>
        <p
          className="text-gray-300 text-sm mt-3 overflow-hidden overflow-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {anime.synopsis}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
