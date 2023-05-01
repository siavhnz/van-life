import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import VanItem from "../../components/host/VanItem";
import styles from "./vans.module.css";

const HostVans = () => {

    const [vans, setVans] = useState();

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, [])

    if (!vans) {
        return <div>loading...</div>
    }

    return <div className={styles.container}>
        <h1 className={styles.title}>
            Your listed vans
        </h1>
        <div className={styles.list}>
            {
                vans.map((item) => {
                    return <VanItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        price={item.price} />
                })
            }
        </div>

    </div>
}

export default HostVans;