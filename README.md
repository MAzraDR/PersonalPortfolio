# 🌐 Personal Portfolio Website

An interactive and visually dynamic **personal portfolio website** built using **React (Vite)**, **GSAP**, and **Framer Motion**.  
This site highlights creativity and technical ability through **smooth animations**, **interactive character movement**, and **responsive layouts**, providing a lively user experience both on desktop and mobile.

---

## 🎯 Overview

This portfolio serves as a digital showcase for projects, design sensibility, and development skills as a **Front-end Developer**
The concept moves beyond static portfolios — offering a playful, game-like style that reflects both technical and artistic identity.

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

## ✨ Key Features

### 🎮 Interactive Character Movement

-   Move the main character horizontally using **keyboard keys (A/D)** or **mobile swipe gestures**.
-   The camera smoothly follows the character’s position via a custom React hook (`useCameraFollow`) powered by GSAP.

### 🎬 Smooth Scene Transitions

-   **GSAP ScrollToPlugin** handles elegant transitions between sections, such as the main menu and content areas.
-   Fade, zoom, and position animations give a cinematic feel to every navigation action.

### 📱 Responsive Design

-   Fully optimized for both desktop and mobile devices.
-   Tailwind CSS ensures adaptive scaling, fluid layouts, and a consistent visual hierarchy.

### 💬 Animated Info Message

-   Displays short hints such as _“Use swipe or press ‘A’ or ‘D’ to move”_ with delayed fade-in/out motion.
-   Managed using **React state** and **AnimatePresence** for clean entrance and exit animations.

### 🎥 Camera and Environment Control

-   Custom `useCameraFollow` keeps the scene centered on the moving character.
-   Adjustable smoothing factor for controlling how early or late the camera reacts to movement.
-   Works dynamically with variable map widths and viewport sizes.

### 🧠 Touch and Keyboard Integration

-   Unified event handling for both mobile (`onTouchStart`) and desktop (`onClick`, keyboard press).
-   Includes dialogue and movement triggers for NPC interaction.

### 🚀 Performance Optimized

-   Built with **Vite** for fast reloads and minimal bundle size.
-   Animations and scroll events are GPU-optimized to ensure smooth performance, even on low-end mobile devices.

---

## 🧩 Development Notes

-   The **camera smoothing factor** in `useCameraFollow` can be tuned for responsiveness.
-   **Overflow locking** is handled dynamically through `document.documentElement.style.overflow` to prevent unwanted scrolling during animation transitions.
-   Touch event behavior should be tested on **real mobile devices** since browser emulators may not replicate all touch gestures accurately.

---

## 👤 Author

**M. Azra Dwi Rizky**  
Front-end Developer

🌐 **Portfolio:** [Azra-portfolio.vercel.app](https://azra-personal-portfolio.vercel.app/)  
💼 **LinkedIn:** [linkedin.com/in/Muhammad-Azra-Dwi-Rizky](https://linkedin.com/in/muhammad-azra-dwi-rizky-b689892b8/)  
📧 **Email:** mazradwir@gmail.com
