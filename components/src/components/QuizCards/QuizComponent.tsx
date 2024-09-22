'use client';
import { useParams, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ScoreModal from "./ScoreModal";
import { PiHourglassFill } from "react-icons/pi";

// Type definitions
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  timer: number; 
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
  url: string;
}

export const QuizComponent: React.FC<FileDetailProps> = ({ files, url }) => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const file = files.find((item) => item.id === id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeLeft === 0) {
      moveToNextQuestion();
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft]);

  useEffect(() => {
    if (file && file.questions[currentQuestionIndex]) {
      setTimeLeft(file.questions[currentQuestionIndex].timer); 
    }
  }, [currentQuestionIndex, file]);

  if (!file) return <p>File not found</p>;

  const currentQuestion = file.questions[currentQuestionIndex];

  const moveToNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);

    if (currentQuestionIndex < file.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsModalOpen(true);
    }
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleAnswerCheck = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => {
      moveToNextQuestion();
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(`/${url}`);
  };

  return (
    <div className="mx-auto h-screen p-3 sm:p-10 my-5 lg:px-8">
      <motion.div
        className="bg-cover bg-center rounded-lg h-full relative"
        style={{ backgroundImage: `url(${file.source.replace("-sm", "")})` }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.button
          className="absolute top-4 right-4 bg-red-600 p-2 rounded-full text-white text-3xl"
          onClick={() => router.push(`/${url}`)}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <FaTimes />
        </motion.button>

        <div className="flex sm:p-0 p-2 items-center justify-center h-full w-full">
          <motion.div
            className="relative rounded-lg shadow-lg max-w-md w-full"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className="bg-cover bg-center rounded-t-lg p-6"
              style={{ backgroundColor: file.bgColor }}
            >
              <h2 className="text-2xl font-bold text-center text-white mb-2">
                {file.title} Questions
              </h2>
              <motion.p
                className="text-center text-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {currentQuestion?.question ?? "Loading question..."}
              </motion.p>
            </div>

            <motion.div
              className="bg-white p-6 rounded-b-lg space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {currentQuestion?.options.map((option, index) => (
                <motion.button
                  key={index}
                  className="w-full py-2 px-4 border-4 rounded-2xl hover:bg-green-300"
                  style={{
                    borderColor: selectedOption === option ? "green" : file.bgColor,
                    backgroundColor: selectedOption === option ? "green" : "transparent",
                    color: selectedOption === option ? "white" : "black",
                  }}
                  onClick={() => handleAnswerCheck(option)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {option}
                </motion.button>
              )) || <p>No options available</p>}

              <div className="hidden">
                {showAnswer && (
                  <motion.p
                    className="text-center mt-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {selectedOption === currentQuestion?.correctAnswer
                      ? "Correct!"
                      : "Incorrect, try again."}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Timer */}
            <motion.div
              className="flex items-center justify-center text-lg mt-6 p-6 rounded-lg space-x-4"
              style={{
                backgroundColor:file.bgColor,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <PiHourglassFill
                className="h-10 w-10 rounded-full text-white border-4 border-white p-2"
                style={{
                  backgroundColor: timeLeft <= 10 ? "red" : file.bgColor,
                  borderColor: timeLeft <= 10 ? "red" : "white",
                }}
              />
              <motion.span
                className="font-semibold text-base p-2 h-10 w-10 flex items-center justify-center rounded-full text-white border-4 border-white"
                style={{
                  backgroundColor: timeLeft <= 10 ? "red" : file.bgColor,
                  borderColor: timeLeft <= 10 ? "red" : "white", 
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {timeLeft}s
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ScoreModal
              score={score}
              totalQuestions={file.questions.length}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
