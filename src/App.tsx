import { useRef } from "react";

function App() {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  function transitionInitialOpacities() {
    setTimeout(() => {
      if (btnRef.current && vidRef.current) {
        btnRef.current.style.opacity = "1";
        vidRef.current.style.opacity = "0.5";
        vidRef.current.style.zIndex = "10";
      }
    }, 100);
  }

  function transitionUIForVideo() {
    if (btnRef.current && vidRef.current) {
      btnRef.current.click;
      btnRef.current.style.cursor = "auto";
      btnRef.current.style.opacity = "0";
      vidRef.current.style.opacity = "1";
      vidRef.current.style.zIndex = "1";
    }
    setTimeout(() => {
      if (btnRef.current) {
        btnRef.current.style.display = "none";
      }
    }, 3000);
  }

  function startVideo() {
    if (vidRef.current) {
      vidRef.current.volume = 0;
      setTimeout(() => {
        vidRef.current?.play();
        fadeInAudio();
      }, 4000);
      vidRef.current.muted = false;
    }
  }

  function fadeInAudio() {
    let vol = 0;
    const interval = setInterval(() => {
      if (vidRef.current) {
        if (vol < 0.95) {
          vol += 0.08;
          vidRef.current.volume = vol;
        } else {
          clearInterval(interval);
        }
      }
    }, 400);
  }

  transitionInitialOpacities();

  function enableControls() {
    if (vidRef.current) {
      vidRef.current.controls = true;
    }
  }

  return (
    <>
      <video
        ref={vidRef}
        aria-label="studio-ghibli-animation"
        onClick={enableControls}
        src="/video.mp4"
        className="animated-video"
        loop
      />
      <button
        ref={btnRef}
        className="start-btn ghibli-heading-font"
        onClick={() => {
          transitionUIForVideo();
          startVideo();
        }}
      >
        STEP OUTSIDE
      </button>
    </>
  );
}

export default App;
