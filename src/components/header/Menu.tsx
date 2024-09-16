import { useState } from "react";
import './Menu.css';

const Menu = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const openMenu = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <svg onClick={openMenu} className={menuOpened ? 'menuOpened' : 'menu'} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
};
  
export default Menu;