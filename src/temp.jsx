import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import "./App.css";

const PosterGallery = () => {
  const posters = Array.from({ length: 63 }, (_, i) => `/posters/poster${i + 1}.png`);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="gallery">
        {posters.map((src, index) => (
          <div key={index} className="poster-card" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
            <img src={src} alt={`Poster ${index + 1}`} />
            <p>Poster {index + 1}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={posters[photoIndex]}
          nextSrc={posters[(photoIndex + 1) % posters.length]}
          prevSrc={posters[(photoIndex + posters.length - 1) % posters.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + posters.length - 1) % posters.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % posters.length)
          }
        />
      )}
    </>
  );
};

export default PosterGallery;


  
