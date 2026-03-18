import { useRef, useState } from 'react';

type UseAudioOptions = {
  src: string;
  volume?: number;
  loop?: boolean;
};

export const useAudio = ({
  src,
  volume = 0.4,
  loop = true,
}: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.loop = loop;

      audio.onended = () => setIsPlaying(false);

      audioRef.current = audio;
    }
  };

  const play = () => {
    loadAudio();
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return {
    isPlaying,
    toggle,
    play,
    pause,
  };
};
