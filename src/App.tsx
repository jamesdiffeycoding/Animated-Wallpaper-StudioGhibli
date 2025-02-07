import { useEffect, useRef, useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  function fadeInAudio(increment: number, msInterval: number) {
    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 1 - increment && vidRef.current) {
        vol += increment;
        vidRef.current.volume = vol;
      } else {
        clearInterval(interval);
      }
    }, msInterval);
  }

  function startVideo() {
    if (!playing) {
      setPlaying(true);
      if (btnRef.current && vidRef.current) {
        vidRef.current.classList.replace("opacity-30", "opacity-100");
      }
      setTimeout(() => {
        if (vidRef.current) {
          vidRef.current.play();
          vidRef.current.volume = 0;
          fadeInAudio(0.05, 100);
        }
      }, 3000);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (btnRef.current && vidRef.current) {
        btnRef.current.classList.replace("opacity-0", "opacity-100");
        vidRef.current.classList.replace("opacity-0", "opacity-30");
      }
    }, 1000);
  }, []);

  return (
    <>
      <video
        className="relative w-full h-screen object-cover opacity-0"
        ref={vidRef}
        aria-label="studio-ghibli-animation"
        onClick={() => {
          if (vidRef.current) vidRef.current.controls = true;
        }}
        src="/video.mp4"
        muted={!playing}
        loop
      />
      <button
        ref={btnRef}
        className={`custom-ghibli-gif custom-ghibli-font custom-ghibli-position-size opacity-0 bg-gray-500 border-2 border-white
          ${playing ? "opacity-0" : "cursor-pointer"}`}
        onClick={startVideo}
      >
        STEP OUTSIDE
      </button>
    </>
  );
}

export default App;
