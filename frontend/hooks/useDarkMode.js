import { useState } from 'react'; 

const useDarkMode = (initialValue) => {
    const [useDarkMode, setDarkMode] = useState(initialValue)
    return [darkMode, setDarkMode];
}

export default useDarkMode;