import "./nav-component.scss";
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

type NavItem = {
    name: string;
    path: string;
}

export default function NavComponent() {
    const location = useLocation();
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    useEffect(() => {
        location.pathname === "/search" ?  
        setNavItems(
            [
                { name: "FAVORITES", path: "/favorite" },
                { name: "SEARCH", path: "/search"}
            ]
        ) : setNavItems(
            [ 
                 { name: "SEARCH", path: "/search" },
                 { name: "FAVORITES", path: "/favorite" }
             ]
         );
    }, [location]);

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
                    <div 
                        className="nav-item"
                        key={item.name}
                    >
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