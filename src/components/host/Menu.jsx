import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
    return <nav className={styles.nav}>
            <Link to="/host">
                Dashboard
            </Link>
            <Link to="/host/income">
                Income
            </Link>
            <Link to="/host/reviews">
                Reviews
            </Link>
        </nav>
}

export default Menu;