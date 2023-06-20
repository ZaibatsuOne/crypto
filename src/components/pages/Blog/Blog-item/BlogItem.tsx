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
  changeDisplay,
}) => {
  return (
    <>
      <article
        className={
          changeDisplay
            ? styles.item
            : "w-full  bg-[#1e272e] rounded-xl hover:bg-footer duration-200"
        }
      >
        <motion.img
          src={img}
          alt={title}
          className={styles.thumbnail}
          // whileHover={{ scale: 1.1 }}
        />
        <div className="flex flex-col gap-6 p-4">
          <main className={styles.main}>
            <header className={styles.header}>
              <User
                userName={userName}
                userAvatar={userAvatar}
                userType={userType}
                id={id}
              />
              <span className={styles.date}>
                <span className={"text-userType"}>Опубликовано</span>19 Фебраля,
                2021
              </span>
            </header>
            <h5 className={styles.title}>{title}</h5>
            <p
              className={changeDisplay ? styles.excerpt : "w-1/2 text-justify"}
            >
              {excerpt}
            </p>
          </main>
          <footer>
            <Button
              text="Читать"
              icon={null}
              borderColor="#FFF"
              paddingX="36px"
            />
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogItem;
