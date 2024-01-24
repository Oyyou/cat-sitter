import styles from "./header.module.scss";

const Header = () => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1><a href="/">Cat sitting Huddersfield</a></h1>
        <nav>
          <a href="/about">ABOUT</a>
          <a href="/rates">RATES</a>
          <a href="/contact">CONTACT US</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;