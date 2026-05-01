import React from "react";
import { useNavigate } from "react-router-dom";

const SubjectCard = ({ subject, description }) => {
  const navigate = useNavigate();
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => navigate(`/study/${subject}`)}
    >
      <h2 className="text-xl font-bold mb-2">{subject} Flashcards</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Studying</button>
    </div>
  );
};

export default SubjectCard;
