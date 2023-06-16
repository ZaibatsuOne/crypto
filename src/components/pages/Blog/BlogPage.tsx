import axios from "axios";
import BlogItem from "./Blog-item/BlogItem";
import Button from "src/components/ui/Buttons/Button";
import styles from "./BlogPage.module.scss";
import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface IBlogPage {
  id: number;
  title: string;
  excerpt: string;
  img: string;
  userAvatar: string;
  userName: string;
}

const BlogPage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(6);
  const [blogItem, setBlogItem] = useState<IBlogPage[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogItem = async () => {
      try {
        const response = await axios.get<IBlogPage[]>(
          "https://6454dae6a74f994b334ad4fb.mockapi.io/Blog"
        );
        setTimeout((): void => {
          setBlogItem(response.data);
          setIsLoading(!isLoading);
        }, 1000);
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
              <article key={item.id}>
                <NavLink to={`/blog/${item.id}`} className={styles.item}>
                  <BlogItem
                    title={item.title}
                    excerpt={item.excerpt}
                    thumbail={item.img}
                    userAvatar={item.userAvatar}
                    userName={item.userName}
                  />
                </NavLink>
              </article>
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
