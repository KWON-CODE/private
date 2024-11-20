import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";



function ThemeSwitcher () {
    
    const { themeName, toggleTheme } = useContext
    (ThemeContext);
    
    // const toggleTheme = () => {
    // setThemeName(themeName === "light"? "dark" :
    //      "light");  // Switch between light and dark theme       
    // };
    
    return(
        <button onClick={toggleTheme}>{themeName}
        </button>
    )
}

export default ThemeSwitcher;