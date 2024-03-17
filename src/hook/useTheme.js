import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const handleTheme = (event) => {
        const isChecked = event.target.checked;
        setTheme(isChecked ? 'dark' : 'light');
    }

    return [theme, handleTheme];
}

export { useTheme };