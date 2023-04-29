
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";
import BackArrow from "../../assets/images/arrow.png";
import CallToAction from "../ui/CallToAction";
import styles from "./Detail.module.css";

const Detail = () => {

    const params = useParams();
    const { id } = { ...params };
    const [detail, setDetail] = useState();

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.van));
    }, [])

    console.log(detail);

    if (!detail) {
        return <div>loading...</div>
    }

    return <div className={styles.container}>
        <Link to="/vans" className={styles.back}>
            <img src={BackArrow} aria-hidden={true} />
            <span>Back to all vans</span>
        </Link>
        <img className={styles.image} src={detail.imageUrl} alt={detail.name} />
        <Button className={styles.type} data-value={detail.type} data-color={detail.type}>
            {detail.type}
        </Button>
        <h1 className={styles.title}>
            {detail.name}
        </h1>
        <div className={styles["price-container"]}>
            <span className={styles.price}>
                ${detail.price}
            </span>
            <span>
                /day
            </span>
        </div>
        <p className={styles.desc}>
            {detail.description}
        </p>
        <CallToAction className={styles.action}>
            <Link to="/vans">
                Rent this van
            </Link>
        </CallToAction>
    </div>
}

export default Detail;