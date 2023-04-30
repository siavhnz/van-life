import { Link } from 'react-router-dom';
import styles from "./Menu.module.css";

const Menu = () => {
    return <nav className={styles.menu}>
        <Link to="/host">
            host
        </Link>
        <Link to="/about">
            about
        </Link>
        <Link to="/vans">
            vans
        </Link>
    </nav>
}

export default Menu;