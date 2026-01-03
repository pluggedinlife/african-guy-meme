import { useState } from "react";
import ossasMeme from "./assets/ossas-meme.jpg";
import one from "./assets/audio/1.mp3";
import two from "./assets/audio/2.mp3";
import three from "./assets/audio/3.mp3";

function App() {
  const [imageError, setImageError] = useState(false);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <>
      <div className="w-full min-h-screen gap-3 sm:gap-4 flex flex-col items-center justify-center bg-emerald-100 sm:bg-blue-100 md:bg-amber-100 px-4 py-6 sm:py-8">
        <span className="text-lg sm:text-2xl font-bold text-center text-gray-900">
          Most African guy meme
        </span>
        <div className="flex items-center justify-center">
          {imageError ? (
            <div className="max-h-48 sm:max-h-64 md:max-h-80 w-auto rounded-lg shadow-lg bg-gray-200 flex items-center justify-center p-8 text-center">
              <span className="text-gray-600 text-sm sm:text-base">
                Failed to load image
              </span>
            </div>
          ) : (
            <img
              className="max-h-48 sm:max-h-64 md:max-h-80 w-auto rounded-lg shadow-lg"
              src={ossasMeme}
              alt="ossas-meme"
              onError={handleImageError}
            />
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto max-w-sm sm:max-w-none">
          <button
            onClick={() => playSound(one)}
            className="bg-blue-500 text-white px-4 py-3 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            uvuvwevwevwe
          </button>
          <button
            onClick={() => playSound(two)}
            className="bg-green-500 text-white px-4 py-3 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium hover:bg-green-600 active:bg-green-700 transition-colors w-full sm:w-auto"
          >
            onyetenyevwe
          </button>
          <button
            onClick={() => playSound(three)}
            className="bg-red-500 text-white px-4 py-3 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium hover:bg-red-600 active:bg-red-700 transition-colors w-full sm:w-auto"
          >
            ugwemubwem ossas
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
