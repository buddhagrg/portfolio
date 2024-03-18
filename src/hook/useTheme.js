import { useEffect, useState } from "react";

const useTheme = () => {
    const [isThemeLight, setIsThemeLight] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', isThemeLight ? 'light' : 'dark');
    }, [isThemeLight]);

    const handleTheme = () => {
        setIsThemeLight(!isThemeLight)
    }

    return [isThemeLight, handleTheme];
}

export { useTheme };