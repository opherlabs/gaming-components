import React from "react";
import { MainLandingPage,files, CompanyValuesComponent,QuizComponent, QuizCards } from '../components/'

export default function Home() {
  return (
    <div className="">
      {/* <MainLandingPage session={null} /> */}
      {/* <CompanyValuesComponent /> */}
      <QuizCards files={files}       />
    </div>

  );
}
