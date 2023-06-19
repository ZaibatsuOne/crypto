import styles from "../HelpPage.module.scss";
import { FC } from "react";

type HelpCategory = {
  icon: string;
  title: string;
  description: string;
};

const HelpPageCategory: FC<HelpCategory> = ({ icon, title, description }) => {
  return (
    <>
      <img src={icon} alt={title} className={styles.icon} />
      <div className={styles.content}>
        <h6>{title}</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default HelpPageCategory;
