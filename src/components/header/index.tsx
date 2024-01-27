import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${styles.headerContainer} ${hidden ? styles.headerHidden : ''}`}>
      <div className={styles.headerContent}>
        <h1><a href="/">Cat sitting Huddersfield</a></h1>
        <nav>
          <a className={styles.link} href="/about">ABOUT</a>
          <a className={styles.link} href="/rates">RATES</a>
          <a className={styles.link} href="/contact">CONTACT US</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;