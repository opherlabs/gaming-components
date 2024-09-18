import React from "react";
import { MainLandingPage,files, CompanyValuesComponent, QuizComponent, QuizGameLanding } from '../components/'
export default function Home() {
  return (
    <div className="">
      <MainLandingPage session={null} />
      <QuizComponent files={files} />
      <QuizGameLanding/>
    </div>

  );
}
