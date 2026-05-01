import React, { useState } from "react";

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  return (
    <div
      className="w-[650px] h-[270px] mx-auto cursor-pointer"
      style={{ perspective: "1400px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d 
        ${flipped ? "rotate-y-180" : ""}`}
      >

        {/* FRONT SIDE — Question */}
        <div
          className="absolute w-full h-full rounded-3xl shadow-xl
          bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700
          p-8 flex flex-col justify-center items-center text-white 
          backface-hidden hover:scale-[1.02] hover:shadow-blue-400/40 transition"
        >
          <h2 className="text-2xl font-bold mb-4 drop-shadow">
            Question
          </h2>

          <p className="text-lg text-center font-medium">
            {card.question}
          </p>

          {/* HINT BUTTON */}
          <button
            className="mt-6 bg-yellow-400 text-gray-900 px-5 py-2 rounded-xl 
            font-semibold hover:bg-yellow-300 transition shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              setShowHint(!showHint);
            }}
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <p className="mt-3 px-4 py-2 bg-white/20 backdrop-blur-sm 
            text-sm rounded-xl text-center">
              {card.hint}
            </p>
          )}
        </div>

        {/* BACK SIDE — Answer */}
        <div
          className="absolute w-full h-full rounded-3xl shadow-xl
          bg-gradient-to-br from-green-400 via-green-500 to-green-600
          p-8 flex flex-col justify-center items-center text-white 
          rotate-y-180 backface-hidden hover:scale-[1.02] 
          hover:shadow-green-300/40 transition"
        >
          <h2 className="text-2xl font-bold mb-4 drop-shadow">
            Answer
          </h2>

          <p className="text-3xl font-extrabold text-center tracking-wide">
            {card.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
