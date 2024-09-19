import React from "react";
import { QuizCards } from "../../components";
import { CardsHolder, files } from "@/components/QuizCards";

function CardsComponent() {
  return (
    <CardsHolder>
      <QuizCards url="cards" files={files} />
    </CardsHolder>

  );
}

export default CardsComponent;
