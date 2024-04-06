import "./nav-component.scss";
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function NavComponent() {
    const [navItems, setNavItems] = useState(
        [
            { name: "SEARCH", path: "/search" },
            { name: "FAVORITES", path: "/favorite" }
        ]);

    const handleClick = (name: string) => {
        setNavItems((prevNavItems) => {
            const newNavItems = [...prevNavItems];
            const itemIndex = newNavItems.findIndex((item) => item.name === name);
        
            newNavItems.push(newNavItems.splice(itemIndex, 1)[0]);
        
            return newNavItems;
        });
    };

    return (
        <div>
            <nav>                
                { navItems?.map((item) =>
                    <div className="nav-item">
                        <NavLink 
                            to={item.path} 
                            onClick={() => handleClick(item.name)}
                            className="nav-link"
                        >
                            <span>{item.name}</span>
                        </NavLink>
                    </div>
                )}
                <div className="ball"></div>
            </nav>
        </div>
    );
}