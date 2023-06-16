import { FC } from "react";
import styles from "../ConnectWalletPage.module.scss";

type ConnectWalletProps = {
  img: string;
  title: string;
  subtitle: string;
};

const ConnectWalletItem: FC<ConnectWalletProps> = ({
  img,
  title,
  subtitle,
}) => {
  return (
    <>
      <img src={img} alt={title} className={styles.icon} />
      <div className={styles.content}>
        <h6>{title}</h6>
        <p className={styles.description}>{subtitle}</p>
      </div>
    </>
  );
};

export default ConnectWalletItem;
