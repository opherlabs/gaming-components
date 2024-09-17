"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Importing the XMark icon from react-icons

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type FileItem = {
  id: string;
  title: string;
  source: string;
  bgColor: string;
  questions: Question[];
};

interface FileDetailProps {
  files: FileItem[];
}

export const QuizComponent: React.FC<FileDetailProps> = ({ files }) => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const file = files.find((item) => item.id === id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!file) return <p>File not found</p>;

  const currentQuestion = file.questions[currentQuestionIndex];

  const handleAnswerCheck = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);

    if (currentQuestionIndex < file.questions.length - 1) {
      setTimeout(() => {
        setShowAnswer(false);
        setSelectedOption(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowAnswer(false);
        setSelectedOption(null);
        router.push('/cards');
      }, 1000);
    }
  };

  return (
    <div className="mx-auto h-screen p-10 my-5 lg:px-8">
      <div
        className="bg-cover bg-center rounded-lg h-full relative"
        style={{ backgroundImage: `url(${file.source})` }}
      >
        {/* XMark Icon */}
        <button
          className="absolute top-4 left-4 text-white text-3xl"
          onClick={() => router.push("/cards")}
        >
          <FaTimes />
        </button>

        <div className="flex items-center justify-center h-full w-full">
          <div className="relative rounded-lg shadow-lg max-w-md w-full">
            <div className="bg-cover bg-center rounded-t-lg p-6" style={{ backgroundColor: file.bgColor }}>
              <h2 className="text-2xl font-bold text-center text-white mb-2">
                {file.title} Questions
              </h2>
              <p className="text-center text-white">
                {currentQuestion.question}
              </p>
            </div>
            <div className="bg-white p-6 rounded-b-lg space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full py-2 px-4 border-4 rounded-2xl hover:bg-green-300"
                  style={{
                    borderColor: selectedOption === option ? 'green' : file.bgColor,
                    backgroundColor: selectedOption === option ? 'green' : 'transparent',
                    color: selectedOption === option ? 'white' : 'black'
                  }}
                  onClick={() => handleAnswerCheck(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {showAnswer && (
              <p className="text-center mt-4">
                {selectedOption === currentQuestion.correctAnswer
                  ? "Correct!"
                  : "Incorrect, try again."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
