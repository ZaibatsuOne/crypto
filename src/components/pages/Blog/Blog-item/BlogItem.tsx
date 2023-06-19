import Button from "src/components/ui/Buttons/Button";
import styles from "../BlogPage.module.scss";
import User from "src/components/user/User";
import { TypeBlogPage } from "src/types/BlogPage.type";
import { FC } from "react";
import { motion } from "framer-motion";

const BlogItem: FC<TypeBlogPage> = ({
  id,
  title,
  excerpt,
  img,
  userAvatar,
  userName,
  userType,
}) => {
  return (
    <>
      <div className={styles.window}>
        <motion.img
          src={img}
          alt={title}
          className={styles.thumbnail}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <main className={styles.main}>
        <header className={styles.header}>
          <User
            userName={userName}
            userAvatar={userAvatar}
            userType={userType}
            id={id}
          />
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
