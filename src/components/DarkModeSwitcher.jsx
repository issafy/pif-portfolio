import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../utils/useDarkSide";
import { useDispatch } from "react-redux";

export default function Switcher() {
    const dispatch = useDispatch();
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
    const themeEvent = new Event('Theme Event');

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
        dispatch({ type: 'SET_DARK_THEME', payload: true });
    }

    return (
        <DarkModeSwitch 
            
            checked={darkSide}
            onChange={toggleDarkMode}
            size={25}
            // color={!darkSide ? "#2f5d62" : "white"}
            className="text-secondary dark:text-tertiary"
        />
    )
}