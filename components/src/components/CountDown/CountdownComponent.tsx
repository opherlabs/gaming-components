'use client';

import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { Clock, Users, Rocket } from 'lucide-react';
import { RegisterAction } from './RegisterAction';

export const CountdownComponent: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  const [isClient, setIsClient] = useState(false);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isClient]);

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-md">
        <span className="text-4xl font-bold text-white mb-2 sm:text-2xl">{timeLeft[interval]}</span>
        <span className="text-lg text-white uppercase sm:text-base">{interval}</span>
      </div>
    );
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 sm:text-2xl">Unity in Diversity: A Cultural Celebration Game</h1>
        <p className="text-xl mb-4 sm:text-lg">Countdown to Heritage Day Celebration</p>
        <div className="flex space-x-4 justify-center sm:space-x-2">
          {isClient ? (timeComponents.length ? timeComponents : <span className="text-4xl sm:text-2xl">The event has started!</span>) : <span className="text-4xl sm:text-2xl">Loading...</span>}
        </div>
      </div>
      
      <div className="z-10 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md max-w-2xl sm:max-w-2xl sm:p-4">
        <h2 className="text-2xl font-bold mb-4 sm:text-xl">How to Play the Game</h2>
        <ul className="space-y-4 sm:space-y-2">
          <li className="flex items-start">
            <Users className="mr-2 flex-shrink-0" />
            <span>You can enter as a team of five people from your BU or play individually on the day.</span>
          </li>
          <li className="flex items-start">
            <Clock className="mr-2 flex-shrink-0" />
            <span>Login Details: Employees will log in using their Microsoft AD credentials to access the game.</span>
          </li>
          <li className="flex items-start">
            <Rocket className="mr-2 flex-shrink-0" />
            <span>Game Launch: The game will officially be launched during our Roundtable event on Friday, 20 September 2024, where we will provide a full introduction and instructions on how to play.</span>
          </li>
        </ul>
      </div>
      
      <div className="z-10 mt-8 text-center">
        <p className="text-lg sm:text-base">Register by 23 September 2024 to secure your spot!</p>
        <div className="py-3">
        <RegisterAction url={'/api/auth/register'} />
        </div>
      </div>
    </div>
  );
};
