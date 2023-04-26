import Master from "./master";
import Banner from "../assets/images/about.jpg";
import styles from "./about.module.css";

const About = () => {
    return <Master>
        <div>
            <img alt="about banner" src={Banner} />
        </div>
        <div className={styles.detail}>
            <h1 className={styles.title}>Don’t squeeze in a sedan when you could relax in a van. </h1>
            <p className={styles.desc}>
                {/* <br /> tags in this text comes from a database */}
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                <br />
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className={styles.action}>
                <h2>
                    Your destination is waiting. Your van is ready.
                </h2>
                <button>Explore your vans</button>
            </div>
        </div>
    </Master>
}

export default About;