import React from 'react';

interface MenuItem {
    title: string;
    link: string;
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
                    {item.subItems && item.subItems.length > 0 ? (
                        <li tabIndex={0}>
                            <details>
                                <summary><li><a href={`${item.link}`} btn-primary>{item.title}</a></li></summary>
                                <ul>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a href={`${subItem.link}`} className='btn btn-block btn-primary'>{subItem.title}</a>
                                        </li>
                                    ))}

                                </ul>
                            </details>
                        </li>

                    ) :
                        <a href={`${item.link}`}>{item.title}</a>
                    }
                </li>
            ))}
        </ul>
    );
};

export default Menu;
