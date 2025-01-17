import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function App() {
  const [wordArray, setWordArray] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const getData = async () => {
    if (!input.trim()) {
      setError("Please enter a word.");
      return;
    }

    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Your word is not available.");
      }
      const data = await response.json();
      setWordArray(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWordArray([]);
    }
  };

  const playAudio = () => {
    if (wordArray.length > 0 && wordArray[0].phonetics[0]?.audio) {
      const audio = new Audio(wordArray[0].phonetics[0].audio);
      audio.play();
    } else {
      alert("No audio available for this word.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-y-6 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            My Dictionary App
          </h1>
          <p className="text-gray-500 mt-2">Discover the meaning of words</p>
        </div>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            className="border-2 border-gray-300 w-full md:w-96 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your word here..."
            onChange={handleInput}
            value={input}
          />
          <button
            className="border-2 border-gray-300 rounded-md p-2 hover:text-blue-500"
            onClick={getData}
          >
            <FaSearch className="text-2xl" />
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {wordArray.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaVolumeUp
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                onClick={playAudio}
              />
              <span className="text-lg font-medium text-gray-800">
                {wordArray[0].word}
              </span>
            </div>
            <div className="text-gray-500 italic mb-3">
              {wordArray[0].phonetic || "No phonetic available"}
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Definition:</h2>
              <p className="text-blue-700">
                {wordArray[0].meanings[0]?.definitions[0]?.definition || "No definition available"}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Example:</h2>
              <p className="text-blue-700">
                {wordArray[0].meanings[1]?.definitions[2]?.example || "No example available"}
              </p>
            </div>
            <div>
              <h2 className="text-lg text-gray-800 font-bold">Synonyms:</h2>
              <p className="text-blue-700">
                {wordArray[0].meanings[1]?.synonyms?.[3] || "No synonyms available"}
              </p>
            </div>
            <div>
              <h2 className="text-lg text-gray-800 font-bold">Learn More:</h2>
              <a
                href={wordArray[0].sourceUrls?.[0] || "#"}
                className="text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link Here
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
