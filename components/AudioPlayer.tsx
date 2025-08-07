// components/AudioPlayer.tsx
"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/paaro.mp3" loop />
      <button
        onClick={toggleAudio}
        className="bg-white border px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        {playing ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}
