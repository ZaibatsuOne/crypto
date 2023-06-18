import axios from "axios";
import BlogBody from "./Blog-body/BlogBody";
import BlogHeader from "./Blog-header/BlogHeader";
import RecentPost from "../Recent-post/RecentPost";
import styles from "./BlogCard.module.scss";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BlogComment from "./Blog-comment/BlogComment";

interface IBlogCard {
  id: number;
  title: string;
  img: string;
  userName: string;
  excerpt: string;
}
type RecentPost = {
  id: number;
  title: string;
  excerpt: string;
  img: string;
};

const BlogCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<IBlogCard | null>(null);
  const [recentPost, setRecentPost] = useState<RecentPost[]>([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get<IBlogCard[]>(
          `https://6454dae6a74f994b334ad4fb.mockapi.io/Blog?id=${id}`
        );
        setTimeout(() => {
          setBlogPost(response.data[0]);
          setIsLoading(!isLoading);
        }, 100);
      } catch (error) {
        alert("Возникла ошибка");
      }
    };
    fetchBlog();
  }, [id]);

  const url = import.meta.env.VITE_MOCKAPI_BLOG;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<RecentPost[]>(
        `${url}?sortBy=id&order=desc`
      );
      setRecentPost(response.data);
    };
    fetchData();
  }, [setRecentPost]);

  return (
    <>
      <Toaster />
      {blogPost && (
        <section className={styles.section}>
          <article className={styles.article}>
            <header className={styles.header}>
              <BlogHeader title={blogPost.title} userName={blogPost.userName} />
            </header>
            <main className={styles.main}>
              <BlogBody />
            </main>
            <footer className={styles.footer}>
              <BlogComment />
            </footer>
          </article>
          <aside>
            <section className="flex flex-col gap-4">
              <h5 className="pb-1">Последние посты</h5>
              {recentPost.slice(0, 4).map((item) => (
                <motion.article key={item.id} whileHover={{ scale: 1.1 }}>
                  <NavLink
                    to={`/blog/${item.id}`}
                    className={styles.recentPost}
                  >
                    <RecentPost
                      title={item.title}
                      excerpt={item.excerpt}
                      img={item.img}
                    />
                  </NavLink>
                </motion.article>
              ))}
            </section>
          </aside>
        </section>
      )}
    </>
  );
};

export default BlogCard;
