import Button from "../ui/Button";
import { Link } from "react-router-dom"
import styles from "./Item.module.css";

const Item = ({ id, name, imageUrl, price, type }) => {
    return <div className={styles.card}>
        <Link to={`${id}`}>
            <img src={imageUrl} alt={name} className={styles.image} />
        </Link>
        <div className={styles["title-container"]}>
            <Link to={`${id}`}>
                <h2 className={styles.title}>
                    {name}
                </h2>
            </Link>
            <div className={styles["price-container"]}>
                <span className={styles.price}>${price}</span>
                <span className={styles.period}>/day</span>
            </div>
        </div>
        <Button data-value={type} data-color={type}>
            {type}
        </Button>
    </div>
}

export default Item;