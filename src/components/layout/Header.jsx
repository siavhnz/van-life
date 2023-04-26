import Wrapper from "./Wrapper";
import styles from "./Header.module.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <Wrapper>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/">
                        #vanlife
                    </Link>
                </div>
                <Menu />
            </div>
        </Wrapper>
    </header>
}

export default Header;