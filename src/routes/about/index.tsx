import { CallToContact, Hero, PageTitle, SiteHelmet } from "components";
import styles from "./about.module.scss";

const AboutPage = () => {

    return (
        <>
            <SiteHelmet
                title='About Cat Sitting Huddersfield - Meet Our Passionate Team'
                description='Discover our dedicated team and personalized cat care services that set us apart in Huddersfield. Get to know us on our About page.'
                path='/about'
            />
            <div className={styles.aboutContainer}>
                <Hero imgSrc="/hero2.webp" />
                <div className={styles.aboutContent}>
                    <PageTitle title="ABOUT" />
                    <p className={styles.textBlock}>Welcome to Cat Sitting Huddersfield! We're a dedicated team of cat enthusiasts committed to providing the best care for your feline friends. Our journey began with a simple love for cats and has grown into a professional cat sitting service trusted by pet owners across Huddersfield</p>
                    <p className={styles.textBlock}>Our founder, Letitia, started Cat Sitting Huddersfield after realizing the need for specialized cat care services. As a lifelong cat owner, Letitia understood the challenges faced by cat owners in finding trustworthy and knowledgeable caretakers.</p>
                    <p className={styles.textBlock}>Our services range from daily check-ins to extended cat sitting. We pride ourselves on our compassionate, individualized approach to cat care, ensuring that each cat's specific needs and routines are met with love and professionalism.</p>
                    <p className={styles.textBlock}>Our vision is to be the go-to cat sitting service in Huddersfield, continually evolving our care to meet the highest standards. At the heart of our service are our core values: compassion, reliability, and expertise in feline care</p>
                    <CallToContact />
                </div>
            </div>
        </>
    );
};

export default AboutPage;