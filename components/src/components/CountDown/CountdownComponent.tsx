'use client';
import React, { useState, useEffect, FC } from 'react';
import { Clock, Users, Rocket } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { RegisterAction } from './RegisterAction';
export const CountdownComponent: FC<{ targetDate: string,url:string  }> = ({ targetDate,url="/api/auth/register" }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number | undefined }>(calculateTimeLeft());

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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  const timeComponents = Object.keys(timeLeft as TimeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-md">
        <span className="text-4xl font-bold text-white mb-2">{timeLeft[interval]}</span>
        <span className="text-lg text-white uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-black text-white" style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}>
       <AnimatedBackground />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Unity in Diversity: A Cultural Celebration Game</h1>
        <p className="text-xl mb-4">Countdown to Heritage Day Celebration</p>
        <div className="flex space-x-4 justify-center">
          {timeComponents.length ? timeComponents : <span className="text-4xl">The event has started!</span>}
        </div>
      </div>
      
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">How to Play the Game</h2>
        <ul className="space-y-4">
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
      
      <div className="mt-8 text-center">
        <p className="text-lg">Register by 23 September 2024 to secure your spot!</p>
        <RegisterAction url={url} />
      </div>
    </div>
  );
};
