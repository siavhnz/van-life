import { NavLink } from 'react-router-dom';
import styles from "./Menu.module.css";

const Menu = () => {
    return <nav className={styles.menu}>
        <NavLink to="/host" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            host
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            about
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            vans
        </NavLink>
    </nav>
}

export default Menu;