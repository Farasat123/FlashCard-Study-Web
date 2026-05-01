### **Overview**
Flashcard Study Web is an interactive web-based learning platform that helps users study and retain information through digital flashcards. The application organizes flashcards by subject and provides an intuitive interface for users to review, test their knowledge, and track their progress.

### **Functional Features**
- **Home Page**: Animated landing page with a creative typewriter effect ("Flashcard Study Tool" text animation)
- **Dashboard**: Browse and select from multiple subjects (English, Math, Science, History, etc.)
- **Study Mode**: Interactive flashcard review with:
  - Question display with hints for each card
  - Multiple navigation options (Previous/Next buttons)
  - Shuffle feature to randomize card order
  - Progress tracking with visual progress bar
  - Card counter (e.g., "3/5 cards")
- **Multi-Subject Support**: Pre-loaded flashcard database with questions across different subjects
- **Responsive Navigation**: Navbar for seamless navigation between pages

### **Technical Stack**

**Frontend Framework & Tooling:**
- **React 19.2.0** - Modern UI library with hooks-based component architecture
- **Vite 7.2.2** - Lightning-fast build tool and dev server with Hot Module Replacement (HMR)
- **React Router DOM 7.9.6** - Client-side routing for multi-page navigation

**Styling:**
- **Tailwind CSS 4.1.17** - Utility-first CSS framework for rapid UI development
- **Tailwind CSS Vite Plugin 4.1.17** - Optimized CSS compilation
- **PostCSS 8.5.6** & **Autoprefixer 10.4.22** - CSS processing and browser compatibility

**Development Tools:**
- **ESLint 9.39.1** - Code quality and linting
- **ESLint React Hooks & React Refresh plugins** - React-specific linting rules
- **Babel/SWC** - JavaScript transpilation through Vite

**Project Structure:**
```
- Pages/: Home, Dashboard, Study (main views)
- Components/: Reusable UI elements (Flashcard, Navbar, ProgressBar, SubjectCard)
- Data/: Centralized flashcard database (flashcards.js)
- Assets/: Static images and SVGs
```

**Key Technologies:**
- Module-based architecture with ES6 modules
- State management using React hooks (useState, useEffect)
- URL parameters for dynamic subject routing (`:subject`)
- Client-side filtering and shuffling logic

This is a modern, performant single-page application (SPA) ideal for educational purposes and self-paced learning.

<img width="1788" height="833" alt="image" src="https://github.com/user-attachments/assets/18b8f97c-e770-4d9d-a8e3-1f4134dc5c7a" />
Card Back Side:

<img width="1805" height="844" alt="image" src="https://github.com/user-attachments/assets/9400fe9c-ea10-4224-9618-68284c4c8942" />

