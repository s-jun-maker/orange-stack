"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  src: string;
  title?: string;
};

export const AudioPlayer = ({ src, title = "Listen to Audio" }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-4 mb-4">
        <Button
          variant="default"
          size="icon"
          onClick={togglePlay}
          className="flex-shrink-0 size-12 rounded-full"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? (
            <Pause className="size-5 dark:text-foreground text-background" />
          ) : (
            <Play className="size-5 ml-0.5 dark:text-foreground text-background" />
          )}
        </Button>

        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-200 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          aria-label="Audio progress"
        />
      </div>
    </div>
  );
};
