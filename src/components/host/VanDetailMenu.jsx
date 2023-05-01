import { NavLink } from "react-router-dom"
import styles from "./VanDetailMenu.module.css";

const VanDetailMenu = ({ id }) => {
    return <nav className={styles.nav}>
        <NavLink to="." end className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Details
        </NavLink>
        <NavLink to="pricing" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Pricing
        </NavLink>
        <NavLink to="photos" className={({ isActive }) => isActive ? styles["active-link"] : null}>
            Photos
        </NavLink>
    </nav>
}

export default VanDetailMenu;