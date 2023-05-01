import { useOutletContext } from "react-router-dom";
import styles from "./van-detail-price.module.css";

const HostVanDetailPrice = () => {
    const van = useOutletContext();

    return <div className={styles["price-container"]}>
        <span>${van.price}</span>
        <span>/day</span>
    </div>
}

export default HostVanDetailPrice;