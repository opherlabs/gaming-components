import React from "react";
import { files, QuizCards } from "../../components";

function CardsComponent() {
    return (
      <div
        style={{
          backgroundImage: 'url("/cards/flag.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
          width: '100vw',  
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="p-4 m-6 rounded-lg shadow-md w-full bg-white">
          <QuizCards files={files} />
        </div>
      </div>
    );
  }
  
  export default CardsComponent;
  