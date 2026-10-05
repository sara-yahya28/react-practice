import { useEffect, useState } from "react";
export default function useLocalStorage(key, initialValue) {//key in localStorage
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        // if nothing is saved return
        if (!saved || saved === "undefined") return initialValue;
        try {
            return JSON.parse(saved)
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);
    return [value, setValue];
}