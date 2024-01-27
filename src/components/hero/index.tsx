import { useEffect, useState } from "react";
import styles from "./hero.module.scss";

const Hero = ({ imgSrc }: { imgSrc: string }) => {
  const [height, setHeight] = useState(400);

  useEffect(() => {
    setHeight(window.innerWidth * 0.37);
  }, [])

  return (
    <div className={styles.heroContainer} style={{ height }}>
      <img src={imgSrc} alt="Cute cat" />
    </div>
  );
};

export default Hero;