# Personal Portfolio Website

This is my first personal portfolio as a junior front-end developer. I made this using React and TailwindCSS for learning projects, so the code is still a mess. I had the inspiration came from old pixel fantasy game menu i played as a child, and cause it's interesting, so why not? i guess at that time.

The idea is for the user or MC in the web as a traveller that come to a town to learn about the lord (myself). So user can know about the lord from talking to NPC and get the item they give to you. Every each NPC give different things about me like my personal bio, my past projects, or how to contact me. 

Even if you don't have time to talk to different NPC, you also can see the item at the main menu below the start adventure button.

---

## ⚙️ Tech Stack

| Category            | Tools                                              |
| ------------------- | -------------------------------------------------- |
| **Framework**       | React + Vite                                       |
| **Styling**         | Tailwind CSS                                       |
| **Animation**       | GSAP (GreenSock Animation Platform), Framer Motion |
| **Deployment**      | Vercel                                             |
| **Package Manager** | pnpm                                               |

---

## Key Features

### Interactive Character Movement

-   Move the main character horizontally using **keyboard keys (A/D)** or **mobile swipe gestures**.
-   The camera smoothly follows the character’s position via a custom React hook (`useCameraFollow`) powered by GSAP.

### Smooth Scene Transitions

-   **GSAP ScrollToPlugin** handles elegant transitions between sections, such as the main menu and content areas.
-   Fade, zoom, and position animations give a cinematic feel to every navigation action.

### Responsive Design

-   Fully optimized for both desktop and mobile devices.
-   Tailwind CSS ensures adaptive scaling, fluid layouts, and a consistent visual hierarchy.

### Animated Info Message

-   Displays short hints such as _“Use swipe or press ‘A’ or ‘D’ to move”_ with delayed fade-in/out motion.
-   Managed using **React state** and **AnimatePresence** for clean entrance and exit animations.

### Camera and Environment Control

-   Custom `useCameraFollow` keeps the scene centered on the moving character.
-   Adjustable smoothing factor for controlling how early or late the camera reacts to movement.
-   Works dynamically with variable map widths and viewport sizes.

### Touch and Keyboard Integration

-   Unified event handling for both mobile (`onTouchStart`) and desktop (`onClick`, keyboard press).
-   Includes dialogue and movement triggers for NPC interaction.

### Performance Optimized

-   Built with **Vite** for fast reloads and minimal bundle size.
-   Animations and scroll events are GPU-optimized to ensure smooth performance, even on low-end mobile devices.

---

## Author

**M. Azra Dwi Rizky**  
Front-end Developer

🌐 **Portfolio:** [Azra-portfolio.vercel.app](https://azra-personal-portfolio.vercel.app/)  
💼 **LinkedIn:** [linkedin.com/in/Muhammad-Azra-Dwi-Rizky](https://linkedin.com/in/muhammad-azra-dwi-rizky-b689892b8/)  
📧 **Email:** mazradwir@gmail.com
