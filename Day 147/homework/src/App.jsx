import React, { useState, useEffect } from 'react';
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-blue-500 text-black"} flex items-center justify-center`}>
      <h1>Hello World</h1>
      <button 
        onClick={() => setIsDark(!isDark)} 
        className="ml-4 p-2 rounded-full bg-gray-800 dark:bg-gray-100"
      >
        {isDark ? <Sun size={30} color="black" /> : <Moon size={30} color="white" />}
      </button>
    </div>
  );
}