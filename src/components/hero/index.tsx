import styles from "./hero.module.scss";
import imgUrl from '/hero.png'

const Hero = () => {

  return (
    <div className={styles.heroContainer}>
      <img src="/hero.jpg" />
    </div>
  );
};

export default Hero;