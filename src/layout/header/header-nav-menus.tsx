import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../data/menu-data";



export default function HeaderNavMenus() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <ul className="navigation">
            {menu_data.map((menu) =>
                menu.sub_menu ? (
                    <li
                        key={menu.id}
                        className={`menu-item ${menu.sub_menu && menu.sub_menu.some(sub => pathname === sub.link) ? 'menu-item-has-children active' : ''}`}
                    >
                        <NavLink to="#">{menu.title}</NavLink>
                        <ul className="sub-menu">
                            {menu.sub_menu.map((sub, i) => (
                                <li key={i} className={pathname === sub.link ? 'active' : ''}>
                                    <NavLink to={sub.link}>{sub.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <li key={menu.id} className={pathname === menu.link ? 'active' : ''}>
                        <NavLink to={menu.link}>{menu.title}</NavLink>
                    </li>
                )
            )}
        </ul>
    )
}
