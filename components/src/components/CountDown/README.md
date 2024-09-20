# CountdownComponent with Animated Background and Particle Effects

This project includes a CountdownComponent with a dynamic countdown timer, particle animation, and an animated background. The component is designed for a Heritage Day celebration game where users can register and receive game information. The background features smooth particle effects, and the countdown updates dynamically every second.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [RegisterAction](#registeraction)
  - [ParticleComponent](#particlecomponent)
  - [CountdownComponent](#countdowncomponent)
  - [AnimatedBackground](#animatedbackground)
- [Customizable Properties](#customizable-properties)
- [How to Play Section](#how-to-play-section)
- [Running the App](#running-the-app)

## Installation

To use this component, ensure you have a working Next.js environment and Node.js installed.

1. Clone or download the project.
2. Navigate to the project directory and install the dependencies:

bash
pnpm install


## Usage

Import the CountdownComponent into your Next.js page.
Pass the targetDate and the url for registration as props to the CountdownComponent.

Example:

tsx
Copy code
import { CountdownComponent } from './components/CountdownComponent';

const HomePage = () => {
  return (
    <CountdownComponent 
      targetDate="2024-09-23T23:59:59" 
      url="/api/auth/signup" 
    />
  );
};

export default HomePage;

## Components

### RegisterAction
The RegisterAction component renders a button for users to register for the event.

Props:

url: A string representing the link to the registration page.
Example:

tsx
Copy code
<RegisterAction url="/register" />

### ParticleComponent
The ParticleComponent renders animated particles across the screen. The particles move and bounce around randomly, creating an engaging visual effect.

Props:

count: Number of particles to display.
Example:

tsx
Copy code
<ParticleComponent count={100} />

### CountdownComponent
The CountdownComponent calculates the time remaining until a specified targetDate and displays the countdown in days, hours, minutes, and seconds.

Props:

targetDate: A string representing the event date in the format YYYY-MM-DDTHH:mm:ss.
url: A string representing the URL for the registration button. Default is /api/auth/signup.
Example:

tsx
Copy code
<CountdownComponent targetDate="2024-09-23T23:59:59" url="/api/auth/signup" />

### AnimatedBackground
The AnimatedBackground component creates a responsive canvas that adapts to the screen size and includes particle animations as the background of the page.

Usage: This component wraps around the particle effect and automatically adjusts to the screen size.

Example:

tsx
Copy code
<AnimatedBackground />

## Customizable Properties

targetDate: Required for the countdown timer to function correctly. Pass the event's date in the correct format (YYYY-MM-DDTHH:mm:ss).
url: Customize the URL to which the registration button directs users.
ParticleComponent count: Adjust the number of particles for different visual effects by changing the count prop.

## How to Play Section

The CountdownComponent includes a "How to Play" section detailing the game rules and login instructions. This section can be modified directly within the CountdownComponent file.

## Key points:

Teams: Users can enter individually or as a team of five from their BU.
Login: Users log in with their Microsoft AD credentials to access the game.
Game launch: The game is introduced during a Roundtable event, where full instructions are provided.

## Running the App

After adding your components, start the development server:

bash
Copy code
pnpm run dev

Open http://localhost:3000 to view the countdown and animated background in action.