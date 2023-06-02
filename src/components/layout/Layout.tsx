import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
