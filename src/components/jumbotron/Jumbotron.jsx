import styles from "./Jumbotron.module.css";

const Jumbotron = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.desc}>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <button className={styles.button}>
            Find your van
        </button>
    </div>
}

export default Jumbotron;