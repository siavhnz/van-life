import Button from "./Button";
import styles from "./CallToAction.module.css";

const CallToAction = (props) => {
    let { className, children, ...rest } = props;

    className = className ? `${styles.button} ${className}` : styles.button;

    return <button className={className} {...rest}>
        {children}
    </button>
}

export default CallToAction;