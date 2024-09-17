// components/ScoreModal.tsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ScoreModalProps {
  score: number;
  totalQuestions: number;
  isOpen: boolean;
  onClose: () => void;
}

const ScoreModal: React.FC<ScoreModalProps> = ({ score, totalQuestions, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-red-500 text-xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold text-center mb-4">Quiz Completed</h2>
        <p className="text-center mb-4">Your Score: {score}/{totalQuestions}</p>
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => window.location.href = '/cards'}
        >
          Go to Cards
        </button>
      </div>
    </div>
  );
};

export default ScoreModal;
