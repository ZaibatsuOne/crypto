import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { FC } from "react";
const Layout: FC = () => {
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
