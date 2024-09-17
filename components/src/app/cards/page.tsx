import { files, QuizCards } from "@/components";
import React from "react";

function CardsComponent() {
  return (
    <div>
        <QuizCards files={files}/>
    </div>
  );
}

export default CardsComponent;