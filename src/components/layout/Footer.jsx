import Wrapper from "./Wrapper";
import styles from "./Footer.module.css";

const Footer = () => {
    return <footer>
        <Wrapper>
            <div className={styles.footer}>
                Ⓒ 2022 #VANLIFE
            </div>
        </Wrapper>
    </footer>
}

export default Footer;