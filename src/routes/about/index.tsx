import { PageTitle } from "components";
import styles from "./about.module.scss";

const AboutPage = () => {

    return (
        <div className={styles.aboutContainer}>
            <PageTitle title="ABOUT" />
            <p>i love cats</p>
        </div>
    );
};

export default AboutPage;