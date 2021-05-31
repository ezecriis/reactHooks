import { useState, useContext } from 'react';
import ThemeContex from '../context/ThemeContex';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const color = useContext(ThemeContex);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="Header">
            <h1 style={{ color }}>ReactHooks</h1>
            <button type="button" onClick={handleClick} >{darkMode ? 'Dark Mode' : 'Light Mode' }</button>
        </div>
    )
}

export default Header;
