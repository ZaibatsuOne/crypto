import axios from "axios";
import BlogItem from "./Blog-item/BlogItem";
import Button from "src/components/ui/Buttons/Button";
import styles from "./BlogPage.module.scss";
import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { pVariants } from "src/utils/AnimationVariants";
import { TypeBlogPage } from "src/types/BlogPage.type";

const BlogPage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(6);
  const [blogItem, setBlogItem] = useState<TypeBlogPage[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = import.meta.env.VITE_MOCKAPI_BLOG;

  useEffect(() => {
    const fetchBlogItem = async () => {
      try {
        const response = await axios.get<TypeBlogPage[]>(
          `${url}?sortBy=id&order=desc`
        );
        setTimeout((): void => {
          setBlogItem(response.data);
          setIsLoading(!isLoading);
        }, 500);
      } catch (error) {
        alert("Возникла ошибка");
      }
    };
    fetchBlogItem();
  }, []);

  return (
    <>
      {blogItem && (
        <section className={styles.section}>
          <section className={styles.gridlist}>
            {blogItem.slice(0, maxCards).map((item) => (
              <motion.article
                animate={"visible"}
                initial={"hidden"}
                variants={pVariants}
                transition={{ duration: 2 }}
                key={item.id}
              >
                <NavLink to={`/blog/${item.id}`} className={styles.item}>
                  <BlogItem
                    title={item.title}
                    excerpt={item.excerpt}
                    img={item.img}
                    userAvatar={item.userAvatar}
                    userName={item.userName}
                    userType="Редактор"
                    id={item.id}
                  />
                </NavLink>
              </motion.article>
            ))}
          </section>

          <button
            className={blogItem.length === maxCards ? "hidden" : styles.button}
            onClick={(): void => setMaxCards((maxCards) => maxCards + 3)}
          >
            <Button text="Показать больше" icon={null} borderColor="#FFF" />
          </button>
        </section>
      )}
    </>
  );
};

export default BlogPage;
