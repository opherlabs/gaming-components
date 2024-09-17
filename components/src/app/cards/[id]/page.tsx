import { files, QuizComponent } from "@/components";
import React from "react";

function CardsComponent() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/cards/flag.svg")' }}
    >
      <div className="rounded-lg w-full">
        <QuizComponent files={files} />
      </div>
    </div>
  );
}

export default CardsComponent;
