import React from "react";
import { CountdownComponent } from '../components/'

export default function Home() {
  return (
    <div className="">
      <CountdownComponent url='/api/auth/signin'  targetDate={'2024-09-26T12:00:00'} />
    </div>
    
  );
}
