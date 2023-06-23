import { FC } from "react";
import styles from "../BlogCard.module.scss";

type BlogHeaderProps = {
  title: string;
  userName: string;
};

const BlogHeader: FC<BlogHeaderProps> = ({ title, userName }) => {
  return (
    <>
      <h3 className="text-center px-1 xl:text-start xl:px-0">{title}</h3>
      <div className={styles.line} />
      <span className={styles.row}>
        <div>
          <h6>DESIGNER INTERVIEW</h6>
          <p className={styles.desc}>AUGUST CHAPTER</p>
        </div>
        <span className={styles.inner}>
          <div>
            <h6>Автор</h6>
            <p className={styles.desc}>{userName}</p>
          </div>
          <div className={styles.blueLine} />
          <div>
            <h6>Дата</h6>
            <p className={styles.desc}>AUGUST 11, 2021</p>
          </div>
        </span>
      </span>
    </>
  );
};

export default BlogHeader;
