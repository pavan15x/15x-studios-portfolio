import React from "react";

const posters = Array.from({ length: 63 }, (_, i) => `/posters/poster${i + 1}.png`);

function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl w-full">
      {posters.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Poster ${index + 1}`}
          className="rounded-2xl shadow-lg transition-transform transform hover:scale-105"
        />
      ))}
    </div>
  );
}

export default Gallery;



