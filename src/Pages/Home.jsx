import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const fullText = "Flashcard Study Tool";
  const [displayedText, setDisplayedText] = useState(fullText);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [phase, setPhase] = useState("erase"); // "erase" → "type"

  useEffect(() => {
    let interval;

    // 1️⃣ ERASE LEFT → RIGHT
    if (phase === "erase") {
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length > 0) {
            return prev.slice(1);
          } else {
            setPhase("type");
            return "";
          }
        });
      }, 100);
    }

    // 2️⃣ TYPE RIGHT → LEFT
    if (phase === "type") {
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < fullText.length) {
            const nextChar =
              fullText[fullText.length - prev.length - 1]; // type from right to left
            return nextChar + prev;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 120);
    }

    return () => clearInterval(interval);
  }, [phase]);

  // 3️⃣ Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-6">
      
      {/* ANIMATED HEADING */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6 tracking-wide">
        {displayedText}
        <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-blue-700`}>
          |
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
        Enhance your learning with beautifully designed, interactive flashcards 
        for English, General Knowledge, and HCI subjects.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 text-white px-8 py-4 text-xl rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-xl transition-all"
      >
        Start Studying
      </button>
    </div>
  );
};

export default Home;
