"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from './DarkModeToggle'
export default function App() {
    const [theme, setTheme] = useState();
    useEffect(() => {
        /*   if (localStorage.theme === "dark" || "theme" in localStorage) { */
        if ("theme" in localStorage && localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else if (localStorage.theme === "light" || !("theme" in localStorage)) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, []);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTheme(localStorage.theme);
        }
    }, []);
    const goToLightMode = () => {
        localStorage.theme = "light";
        setTheme("light");
        document.documentElement.classList.remove("dark");
    };
    const goToDarkMode = () => {
        localStorage.theme = "dark";
        setTheme("dark");
        document.documentElement.classList.add("dark");
    };
    return (
        <>
            <DarkModeToggle theme={theme} setTheme={setTheme} goToLightMode={goToLightMode} goToDarkMode={goToDarkMode} />
        </>

    );
}
