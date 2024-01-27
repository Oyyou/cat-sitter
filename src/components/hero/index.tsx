import styles from "./hero.module.scss";

const Hero = ({ imgSrc }: { imgSrc: string }) => {

  return (
    <div className={styles.heroContainer}>
      <img src={imgSrc} alt="Cute cat" />
    </div>
  );
};

export default Hero;