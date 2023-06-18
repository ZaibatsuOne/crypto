import { FC } from "react";
import styles from ".././BlogCard.module.scss";
const BlogBody: FC = () => {
  return (
    <>
      <img src="../img/pages/Blog/BlogCard/1.png" className={styles.thumbail} />
      <div className={styles.paragraph}>
        <h5 className={styles.subtitle}>
          What is the most fun thing to become a designer?
        </h5>
        {/* <p className={styles.text}>{blogPost.excerpt}</p> */}
      </div>
      <span className={styles.row}>
        <img src="../img/pages/Blog/BlogCard/2.png" />
        <img src="../img/pages/Blog/BlogCard/3.png" />
      </span>
      <div className={styles.paragraph}>
        <h5 className={styles.subtitle}>
          What is the most fun thing to become a designer?
        </h5>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Cupidatat non Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <img src="../img/pages/Blog/BlogCard/4.png" />
      <div className={styles.paragraph}>
        <h5 className={styles.subtitle}>
          What is the most fun thing to become a designer?
        </h5>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Cupidatat non Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className={styles.row}>
        <span className={styles.box}>
          <h6>Теги:</h6>
          <p className={styles.text}>Биткойн, Токены, Кошелек</p>
        </span>
        <span className={styles.box}>
          <h6>Поделиться:</h6>
          <span className={styles.social}>
            <img src="../img/ui/social/twitter.svg" alt="Twitter" />
            <img src="../img/ui/social/telegram.svg" alt="Telegram" />
            <img src="../img/ui/social/facebook.svg" alt="Facebook" />
          </span>
        </span>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default BlogBody;
