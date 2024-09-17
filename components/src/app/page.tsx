

import {files, QuizComponent } from "../components";

import React from "react";
import { MainLandingPage,files, CompanyValuesComponent,QuizComponent } from '../components/'
export default function Home() {
  return (
    <div className="">
      <MainLandingPage session={null} />
      <CompanyValuesComponent />
      <QuizComponent files={files} />
    </div>

  );
}
