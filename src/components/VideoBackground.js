import React from "react";

import useMainTrailer from "../utils/hooks/useMainTrailer";

const VideoBackground = ({ movieId }) => {
  const movieVideo = useMainTrailer(movieId);
  return movieVideo !== null ? (
    <div>
      <iframe
  className='w-screen h-[80vh] absolute -top-40 -z-10 max-md:-top-40'
  src={`https://www.youtube.com/embed/${movieVideo[0]?.key}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${movieVideo[0]?.key}`}
  title="YouTube video player"
  allow="autoplay; encrypted-media"
  allowFullScreen
  frameBorder="0"
></iframe>

    </div>
  ) : null;
};


export default VideoBackground;
