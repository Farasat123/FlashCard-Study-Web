import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { flashcards } from "../Data/flashcards";
import Flashcard from "../components/Flashcard";
import ProgressBar from "../components/ProgressBar";

const Study = () => {
  const { subject } = useParams();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filtered = flashcards.filter((card) => card.subject === subject);
    setCards(filtered);
  }, [subject]);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const shuffleCards = () => setCards([...cards].sort(() => Math.random() - 0.5));

  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {cards.length > 0 && (
        <>
          <Flashcard card={cards[currentIndex]} />
          <div className="flex justify-between w-80 mt-4">
            <button onClick={prevCard} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Previous</button>
            <button onClick={shuffleCards} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">Shuffle</button>
            <button onClick={nextCard} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
          </div>
          <div className="w-80 mt-4">
            <ProgressBar completed={progress} />
            <p className="text-gray-700 text-sm mt-1">{currentIndex + 1} / {cards.length} cards</p>
          </div>
        </>
      )}
      {cards.length === 0 && <p className="text-gray-700">No flashcards found for this subject.</p>}
    </div>
  );
};

export default Study;
