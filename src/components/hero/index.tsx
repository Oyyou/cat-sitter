import { useEffect, useState } from "react";
import styles from "./hero.module.scss";

const Hero = ({ imgSrc }: { imgSrc: string }) => {
  const [height, setHeight] = useState(400);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth * 0.37);
    };

    // Initial update
    updateHeight();

    // Attach event listener for window resize
    window.addEventListener("resize", updateHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [])

  return (
    <div className={styles.heroContainer} style={{ height }}>
      <img src={imgSrc} alt="Cute cat" />
    </div>
  );
};

export default Hero;