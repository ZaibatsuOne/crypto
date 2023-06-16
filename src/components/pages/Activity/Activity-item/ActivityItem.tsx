import { FC } from "react";
import styles from "../ActivityPage.module.scss";

type ActivityListProps = {
  title: string;
  img: string;
  author: string;
};

const ActivityItem: FC<ActivityListProps> = ({ title, img, author }) => {
  return (
    <>
      <img src={img} alt={title} className={styles.img} />
      <header className={styles.header}>
        <h5>{title}</h5>
        <div className={styles.description}>
          <p className={styles.text}>
            started following <span className={styles.author}>{author}</span>
          </p>
          <p className={styles.date}>At 2:30 PM on 19th June, 2021</p>
        </div>
      </header>
    </>
  );
};

export default ActivityItem;
