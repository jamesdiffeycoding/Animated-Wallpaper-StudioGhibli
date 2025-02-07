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

  function transitionUI() {
    if (btnRef.current && vidRef.current) {
      btnRef.current.style.cursor = "auto";
      btnRef.current.style.opacity = "0";
      vidRef.current.style.opacity = "1";
      vidRef.current.style.zIndex = "1";
    }
  }

  function startVideo() {
    if (vidRef.current) {
      setTimeout(() => {
        vidRef.current?.play();
      }, 4000);
      vidRef.current.muted = false;
    }
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
          transitionUI();
          startVideo();
        }}
      >
        STEP OUTSIDE
      </button>
    </>
  );
}

export default App;
