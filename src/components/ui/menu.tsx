import React from 'react';

interface MenuItem {
    title: string;
    subItems?: MenuItem[];
}

interface MenuProps {
    items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
        <ul className="menu w-80 min-h-full bg-base-200 text-base-content">
            {items.map((item, index) => (
                <li key={index}>
                    <a className=" menu menu-horizontal px-1">{item.title}</a>
                    {item.subItems && item.subItems.length > 0 && (
                        <li tabIndex={0}>
                            <details>
                                <ul className="p-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a >{subItem.title}</a>
                                        </li>
                                    ))}

                                </ul>
                            </details>
                        </li>

                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
