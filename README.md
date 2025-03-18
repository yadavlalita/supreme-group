# 🚀 Supreme Group Website

The **Supreme Group Website** is a modern, responsive web application built using **React.js, TypeScript, Vite, and Tailwind CSS**. The website ensures a seamless user experience while maintaining high performance, accessibility, and visual consistency with the provided **Figma** design.

---

## 📌 Table of Contents
- [Project Setup](#project-setup)
- [Component Architecture Overview](#component-architecture-overview)
- [Responsive Design Strategy](#responsive-design-strategy)
- [Performance Optimization Techniques](#performance-optimization-techniques)
- [Accessibility Considerations](#accessibility-considerations)
- [Third-Party Libraries Used](#third-party-libraries-used)
- [Implementation Decisions & Assumptions](#implementation-decisions--assumptions)
- [Challenges & Solutions](#challenges--solutions)
- [Upcoming Features & Improvements](#upcoming-features--improvements)
- [Additional Remarks](#additional-remarks)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Features
    ✅ **Fully Responsive** – Optimized for all screen sizes  
    ✅ **Interactive 360-Degree Video Section** – Users can click on car parts to play respective videos  
    ✅ **Modern Footer Design** – Well-structured, aligned, and includes social media links  
    ✅ **Smooth Animations** – Enhanced UI experience with animations  
    ✅ **Optimized Performance** – Built with **Vite** for fast loading  

---

## 🛠️ Tech Stack

    - **Frontend:** React.js + TypeScript + Vite
    - **Styling:** Tailwind CSS
    - **State Management:** React Context API
    - **Deployment:** Vercel / Netlify
    - **Version Control:** Git & GitHub

---

## 🛠️ Project Setup

### 1️⃣ **Clone the Repository**

    git clone https://github.com/yadavlalita/supreme-group-website.git
    cd supreme-group-website
    npm install
    npm run dev
    Now, open http://localhost:5173/ in your browser.

**🏗️ Component Architecture Overview**

    supreme-group-website/
    │── public/               # Static assets (icons, fonts, etc.)
    │── src/
    │   ├── assets/           # Images and video assets
    │   ├── components/       # Reusable UI components
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── VideoPlayer.tsx
    │   │   ├── Button.tsx
    │   │   ├── Navigation.tsx
    │   ├── pages/            # Page-level components
    │   │   ├── Home.tsx
    │   │   ├── About.tsx
    │   ├── styles/           # Tailwind CSS styles
    │   ├── App.tsx           # Main app component
    │   ├── main.tsx          # Entry point
    │── .gitignore            # Ignored files in Git
    │── package.json          # Project dependencies
    │── tailwind.config.js    # Tailwind CSS configuration
    │── vite.config.ts        # Vite configuration
    │── README.md             # Project documentation

**Key Components**

     Header.tsx – Contains the navigation bar
     Footer.tsx – Displays site links and social media icons
     VideoPlayer.tsx – Manages the interactive video experience
     Button.tsx – Custom buttons for interaction
     Navigation.tsx – Controls routing and navigation
     Home.tsx – Main landing page layout

**📱 Responsive Design Strategy**

    Implemented a mobile-first approach using Tailwind CSS.
    Uses CSS Grid and Flexbox to adjust layouts dynamically.
    Media queries ensure proper scaling across devices (sm, md, lg, xl).
    Video player adjusts based on screen width.
    Footer content stacks for mobile devices.

**⚡ Performance Optimization Techniques**

    Lazy Loading: Images and videos load only when needed.
    Code Splitting: Leveraged React Suspense and dynamic imports.
    Minified Assets: Used Vite’s optimized bundling.
    Optimized Video Playback: Uses native HTML5 video player instead of external libraries.

**♿ Accessibility Considerations**

    Used ARIA attributes for interactive elements.
    Ensured keyboard navigation support.
    Used high-contrast colors for better readability.
    Implemented semantic HTML for improved screen reader support.

**📦 Third-Party Libraries Used**

    Library	       Purpose
    React.js	      Core UI framework
    TypeScript	    Type safety and maintainability
    Tailwind CSS	  Utility-first styling
    Vite	          Fast build and development
    React          Icons	Lightweight icons for UI
    Framer Motion	 Smooth animations

**💡 Implementation Decisions & Assumptions**

    **Decisions Taken**
    Vite over CRA: Chose Vite due to faster development and optimized builds.
    Tailwind CSS over SCSS: Faster styling with utility classes.
    React Context API: For managing state without Redux overhead.
    
    **Assumptions**
    The provided Figma design reflects the final UI/UX.
    The videos are provided in MP4/WebM format.
    Users will primarily interact with the video player.


**🛠️ Challenges & Solutions**

    **1️⃣ Challenge: Managing Video Performance**
    📌 Issue: Videos were causing slow load times.
    ✅ Solution: Implemented lazy loading, optimized file sizes, and used preload metadata.

    **2️⃣ Challenge: Ensuring Smooth Animations**
    📌 Issue: Hover effects caused lag.
    ✅ Solution: Used Framer Motion with optimized render cycles.
    
    **3️⃣ Challenge: Responsive Navigation Bar**
    📌 Issue: Menu items didn’t align correctly on mobile.
    ✅ Solution: Used flexbox with Tailwind's responsive classes.

**🔮 Upcoming Features & Improvements**

    🔹 Dark Mode Support
    🔹 Multi-Language Support
    🔹 CMS Integration for Dynamic Content
    🔹 More Animations & Micro-Interactions
    🔹 Enhanced SEO Optimization

**📜 Additional Remarks**

    The project was built to be scalable, ensuring ease of adding new pages and features.
    Follows best coding practices, using ESLint and Prettier for consistency.
    Deployed using Vercel/Netlify, ensuring continuous deployment.

**📜 License**

    This project is licensed under the MIT License – feel free to use and modify.

**📞 Contact**

    For queries or contributions, reach out at:
    
        ✉ Email: yadavlalita802@gmail.com
        🌐 Website: https://supreme-group-x7jm.vercel.app/
        🔗 GitHub: https://github.com/yadavlalita/supreme-group

