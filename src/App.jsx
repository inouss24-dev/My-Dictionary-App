import { FaVolumeUp } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
        {/* Conteneur principal */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-y-6 w-11/12 md:w-2/3 lg:w-1/2">
          {/* Titre */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              My Dictionary App
            </h1>
            <p className="text-gray-500 mt-2">Discover the meaning of words</p>
          </div>

          {/* Input pour chercher un mot */}
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              className="border-2 border-gray-300 w-full md:w-96 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your word here..."
            />
            <button className=" border-2 border-gray-300 rounded-md p-2  hover:text-blue-500">
              Search
            </button>
          </div>

          {/* Résultat */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            {/* Prononciation et mot */}
            <div className="flex items-center gap-2 mb-3">
              <FaVolumeUp className="text-blue-500 cursor-pointer hover:text-blue-700" />
              <span className="text-lg font-medium text-gray-800">
                Body diversity
              </span>
            </div>

            {/* Transcriptions phonétiques */}
            <div className="text-gray-500 italic mb-3">
              <span>/ˈbɒ.di/ /daɪˈvɜː.sə.ti/</span>
            </div>

            {/* Définition */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Definition:
              </h2>
              <p className="text-gray-700">
                The concept of accepting and embracing the different shapes,
                sizes, and appearances of bodies in a positive and inclusive
                manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
