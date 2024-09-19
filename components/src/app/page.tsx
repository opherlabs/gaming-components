import React from "react";
import { CountdownComponent, MainLandingPage } from '../components/'

export default function Home() {
  return (
    <div className="">
      {/* <MainLandingPage session={null} /> */}
      <CountdownComponent url='/api/auth/signin'  targetDate={'2024-09-26T12:00:00'} />
    </div>
    
  );
}
