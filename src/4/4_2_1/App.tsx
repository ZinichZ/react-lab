// #4_2_1
// Управление воспроизведением видео через кнопку play/pause и синхронизация с медиа-событиями

import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const video = videoRef.current;
    if (video) {
      if (isPlaying)
        video.pause();
      else
        video.play();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
      >
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
