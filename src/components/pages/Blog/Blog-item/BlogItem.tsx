import User from "src/components/user/User";
import styles from "../BlogPage.module.scss";
import { FC } from "react";
import Button from "src/components/ui/Buttons/Button";

interface IBlogItemProps {
  title: string;
  excerpt: string;
  thumbail: string;
  userAvatar: string;
  userName: string;
}

const BlogItem: FC<IBlogItemProps> = ({
  title,
  excerpt,
  thumbail,
  userAvatar,
  userName,
}) => {
  return (
    <>
      <img src={thumbail} alt={title} className={styles.thumbnail} />
      <main className={styles.main}>
        <header className={styles.header}>
          <User userName={userName} userAvatar={userAvatar} userType="Создал" />
          <span className={styles.date}>Feb 19, 2021</span>
        </header>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.excerpt}>{excerpt}</p>
      </main>
      <footer>
        <Button text="Читать" icon={null} borderColor="#FFF" paddingX="36px" />
      </footer>
    </>
  );
};

export default BlogItem;
