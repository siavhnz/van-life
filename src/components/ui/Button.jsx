import styles from "./Button.module.css";

const Button = (props) => {
    let { className, children, ...rest } = props;
    
    className = className ? `${styles.button} ${className}` : styles.button;

    return <button className={className} {...rest}>
        {children}
    </button>
}
export default Button;