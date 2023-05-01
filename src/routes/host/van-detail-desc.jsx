import { useOutletContext } from "react-router-dom";
import styles from "./van-detail-desc.module.css";

const HostVanDetailDesc = () => {

    const van = useOutletContext();

    return <div className={styles.container}>
        <div>
            <span className={styles.label}>name:</span>
            <h2>{van.name}</h2>
        </div>
        <div>
            <span className={styles.label}>Category:</span>
            <span>{van.type}</span>
        </div>
        <div>
            <span className={styles.label}>Description:</span>
            <p>{van.description}</p>
        </div>
        <div>
            <span className={styles.label}>Visibility:</span>
            <span>Public</span>
        </div>
    </div>
}

export default HostVanDetailDesc;