import { Link, Outlet, useParams } from "react-router-dom";
import BackArrow from "../../assets/images/arrow.png";
import Button from "../../components/ui/Button";
import styles from "./van-detail.module.css";
import { useEffect, useState } from "react";
import VanDetailMenu from "../../components/host/VanDetailMenu";

const HostVanDetail = () => {
    const { id } = useParams();
    const [van, setVan] = useState();

    useEffect(() => {

        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))

    }, [id])

    if (!van) {
        return <div>loading...</div>
    }

    return <div className={styles.container}>
        <Link to=".." relative="path" className={styles.back}>
            <img src={BackArrow} aria-hidden={true} />
            <span>Back to all vans</span>
        </Link>

        <div className={styles.info}>
            <div className={styles["sub-info"]}>
                <img src={van.imageUrl} alt={van.name} className={styles.image} />
                <div>
                    <Button className={styles.button} data-type={van.type} data-color={van.type}>
                        {van.type}
                    </Button>
                    <h1 className={styles.title}>{van.name}</h1>
                    <div>
                        <span className={styles.price}>${van.price}</span>
                        <span>/day</span>
                    </div>
                </div>
            </div>
            <VanDetailMenu id={van.id} />
            <Outlet context={van} />
        </div>
    </div>

}

export default HostVanDetail;