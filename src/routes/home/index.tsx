import { CallToContact, Hero, Reviews, SiteHelmet } from "components";
import styles from "./home.module.scss";

const HomePage = () => {

    return (
        <>
            <SiteHelmet
                title='Cat Sitting Huddersfield'
                description="Professional and loving cat sitting services in Huddersfield. Experienced cat sitters ensuring your cat's comfort and safety."
                path='/about'
            />
            <div className={styles.homeContainer}>
                <Hero imgSrc="/hero1.webp" />
                <div className={styles.introContainer}>
                    <h2>Welcome to Cat Sitting Huddersfield!</h2>
                    <p>We specialize in providing loving and attentive care for your feline friends while you're away. With years of experience and a passion for cats, we ensure your pet is happy and healthy in your absence.</p>
                </div>
                <div className={styles.aboutUsContainer}>
                    <h3>About Us</h3>
                    <p>Founded by cat lovers, for cat lovers, our team brings expertise and a deep love for felines to every job. We're dedicated to providing the best possible care for your beloved pets.</p>
                </div>
                <Reviews />
                <CallToContact />
            </div>
        </>
    );
};

export default HomePage;