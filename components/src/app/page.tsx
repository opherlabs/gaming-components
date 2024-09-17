import { CompanyValuesComponent } from "@/components/CompanyValuesComponent";
import { Scorebutton } from "@/components/ScoreButton";



import {files, QuizComponent } from "@/components";
import React from "react";
import {MainLandingPage}  from '../components/'
export default function Home() {
  return (

=======
    <div className="">
    <MainLandingPage session={null} />
        <CompanyValuesComponent />
   <QuizComponent files={files}/>
    </div>

  );
}
