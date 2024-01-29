import { Hero, PageTitle, SiteHelmet } from "components";
import styles from "./rates.module.scss";

const RatesPage = () => {

    return (
        <>
            <SiteHelmet
                title='About Cat Sitting Huddersfield - Affordable Cat Sitting Rates'
                description='Find competitive cat sitting rates in Huddersfield without compromising on quality care for your feline friends. View our pricing plans for daily and overnight cat sitting.'
                path='/rates'
            />
            <div className={styles.aboutContainer}>
                <Hero imgSrc="/hero3.webp" />
                <div className={styles.aboutContent}>
                    <PageTitle title="RATES" />
                    <h3>Cat vist - £12</h3>
                    <p>I can see cat</p>
                </div>
            </div>
        </>
    );
};

export default RatesPage;