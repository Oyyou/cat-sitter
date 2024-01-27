import styles from "./callToContact.module.scss";

const CallToContact = () => {

    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
                <p>Ready to give your cat the care they deserve? <a href="/contact">Contact us today!</a></p>
            </div>
        </div>
    );
};

export default CallToContact;