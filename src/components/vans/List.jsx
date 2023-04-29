import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./List.module.css";


const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        // loadVans();
        fetch("/api/vans")
            .then(res => {
                return res.json()
            })
            .then(jsonData => setData(jsonData.vans))

    }, [])

    const Content = <div className={styles.container}>
        {
            data.map((item) => {
                return <Item key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    type={item.type} />
            })
        }
    </div>

    return Content;

}

export default List;