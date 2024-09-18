import React from "react";
import { AnimatedCard, MainLandingPage, QuizCards } from '../components/'
import { files } from "@/components/QuizCards";

export default function Home() {
  return (
    <div className="">
      <MainLandingPage session={null} />
      <QuizCards files={files}       />
    </div>

  );
}
