import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
    return <nav className={styles.nav}>
        <NavLink to="." end className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Dashboard
        </NavLink>
        <NavLink to="income" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Income
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Vans
        </NavLink>
        <NavLink to="reviews" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Reviews
        </NavLink>
    </nav>
}

export default Menu;