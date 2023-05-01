import { Link } from "react-router-dom";
import styles from "./VanItem.module.css";

const VanItem = ({ id, name, price, imageUrl }) => {

    return <Link to={`/host/vans/${id}`} className={styles.container}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <div>
            <h2 className={styles.title}>
                {name}
            </h2>
            <span>
                ${price}/day
            </span>
        </div>
    </Link>

}

export default VanItem;