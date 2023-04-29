import Button from "../ui/Button";
import styles from "./Filter.module.css";

const Filter = () => {

    const filters = ["simple", "luxury", "rugged"];

    const handleClick = (e) => {
        console.log(e.target.dataset.value)
    }

    return <div className={styles.container}>
        <h2 className={styles.title}>
            Explore our van options
        </h2>
        <div className={styles.actions}>
            {
                filters.map((item) => {
                    return <Button data-value={item} data-hover={item} key={item} onClick={handleClick}>
                        {item}
                    </Button>
                })
            }

            <button className={styles["clear-action"]}>
                clear filter
            </button>

        </div>
    </div>
}
export default Filter;