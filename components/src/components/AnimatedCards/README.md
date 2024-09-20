# AnimatedCard Component

This is a reusable `AnimatedCard` component built using React, Framer Motion, and Tailwind CSS. The component provides a visually engaging 3D card effect that responds to user interactions like hover, along with smooth animations.

## Features

- **3D hover effect**: The card tilts and scales when hovered over, giving it a 3D perspective.
- **Framer Motion animations**: Smooth fade-in and scale animations for decorative circles around the card and interactive elements.
- **Customizable**: You can pass custom content, titles, and links to the card, allowing for easy integration into various projects.
- **Responsive Design**: The component is built using Tailwind CSS, making it highly customizable and responsive on different screen sizes.

## Usage

### Props

- **children**: (`React.ReactNode`) - The content to display inside the card.
- **title**: (`string`) - The title to display on the hover overlay.
- **href**: (`string`) - The link to which the card should navigate when clicked.
- **className**: (`string`) - Additional class names for styling the content inside the card.
- **containerClassName**: (`string`) - Additional class names for styling the card container.

### Example