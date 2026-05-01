import React from "react";
import SubjectCard from "../components/SubjectCard";

const Dashboard = () => {
  const subjects = [
    { subject: "English", description: "Improve your English vocabulary and grammar." },
    { subject: "General Knowledge", description: "Learn interesting facts and information." },
    { subject: "HCI", description: "Understand Human-Computer Interaction concepts." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Select a Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((s) => (
          <SubjectCard key={s.subject} subject={s.subject} description={s.description} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
