
import {files, QuizComponent } from "../components";
import React from "react";
import {MainLandingPage}  from '../components/'
export default function Home() {
  return (
    <div className="">
    <MainLandingPage session={null} />
   <QuizComponent files={files}/>
    </div>
  );
}
