import { Footer, Header, Hero } from "components"
import styles from "./layout.module.scss";

type LayoutProps = {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {

  return (
    <div className={styles.layoutContainer}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;