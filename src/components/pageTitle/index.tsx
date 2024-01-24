import styles from "./pageTitle.module.scss";

const PageTitle = ({ title }: { title: string }) => {

    return (
        <div className={styles.pageTitleContainer}>
            <h2>{title}</h2>
        </div>
    );
};

export default PageTitle;