import React from "react";

const AboutUsPage = () => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-amber-600 mb-4">
          About This To-Do List
        </h1>
        <ul className="text-lg text-gray-700 text-center max-w-2xl list-decimal">
          <li>This To-Do List helps you organize tasks efficiently.</li>
          <li>You can add, delete, and mark tasks as completed.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
