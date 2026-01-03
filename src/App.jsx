import { useState } from "react";
import ossasMeme from "./assets/ossas-meme.jpg";
import one from "./assets/audio/1.mp3";
import two from "./assets/audio/2.mp3";
import three from "./assets/audio/3.mp3";

function App() {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <>
      <div className="w-full h-screen gap-3 flex flex-col items-center justify-center bg-amber-100">
        <span className="text-2xl font-bold">Most African guy meme</span>
        <div>
          <img className="h-full w-auto" src={ossasMeme} alt="ossas-meme" />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => playSound(one)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            uvuvwevwevwe
          </button>
          <button
            onClick={() => playSound(two)}
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            onyetenyevwe
          </button>
          <button
            onClick={() => playSound(three)}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            ugwemubwem ossas
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
