import axios from "axios";
import Review from "src/components/layout/Review/Review";
import styles from "./BlogCard.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IBlogCard {
  id: number;
  title: string;
  img: string;
  userName: string;
  excerpt: string;
}
type TypeCommentary = {
  nickName: string;
  email: string;
  message: string;
};
const BlogCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<IBlogCard | null>(null);
  const [comment, setComment] = useState<TypeCommentary[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TypeCommentary>();

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
        }, 500);
      } catch (error) {
        alert("Возникла ошибка");
      }
    };
    fetchBlog();
  }, []);

  const onSubmit: SubmitHandler<TypeCommentary> = ({
    nickName,
    email,
    message,
  }) => {
    const review = {
      nickName: nickName,
      email: email,
      message: message,
    };
    setComment([...comment, review]);
    reset();
    toast.success("Комментарий оставлен");
  };

  return (
    <>
      <Toaster />
      {blogPost && (
        <section className={styles.section}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h3>{blogPost.title}</h3>
              <div className={styles.line} />
              <span className={styles.row}>
                <div>
                  <h6>DESIGNER INTERVIEW</h6>
                  <p className={styles.desc}>AUGUST CHAPTER</p>
                </div>
                <span className={styles.inner}>
                  <div>
                    <h6>Автор</h6>
                    <p className={styles.desc}>{blogPost.userName}</p>
                  </div>
                  <div className={styles.blueLine} />
                  <div>
                    <h6>Дата</h6>
                    <p className={styles.desc}>AUGUST 11, 2021</p>
                  </div>
                </span>
              </span>
            </header>
            <main className={styles.main}>
              <img
                src="../img/pages/Blog/BlogCard/1.png"
                className={styles.thumbail}
              />
              <div className={styles.paragraph}>
                <h5 className={styles.subtitle}>
                  What is the most fun thing to become a designer?
                </h5>
                <p className={styles.text}>{blogPost.excerpt}</p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
              <img src="../img/pages/Blog/BlogCard/4.png" />
              <div className={styles.paragraph}>
                <h5 className={styles.subtitle}>
                  What is the most fun thing to become a designer?
                </h5>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
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
            </main>
            <footer>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h4>Оставьте комментарий</h4>
                <div className={styles.group}>
                  <input
                    {...register("nickName", {
                      required: true,
                    })}
                    className={styles.input}
                    placeholder="Никнейм"
                  />
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    className={styles.input}
                    placeholder="E-mail"
                  />
                </div>
                <textarea
                  {...register("message", { required: true })}
                  className={styles.textarea}
                  placeholder="Ваше сообщение"
                />
                <input
                  type="submit"
                  value="Оставить комментарий"
                  className={styles.button}
                />
              </form>
              <div style={{ display: "none" }}>
                {errors.nickName &&
                  toast.error("Поле «Никнейм» обязательно к заполнению")}
                {errors.email &&
                  toast.error("Поле «E-mail» обязательно к заполнению")}
                {errors.message &&
                  toast.error("Поле «Комментарий» обязательно к заполнению")}
              </div>
            </footer>
            <section className={styles.comments}>
              {comment.map((item) => (
                <article className={styles.commentary}>
                  <Review
                    nameUser={item.nickName}
                    commentaryUser={item.message}
                  />
                </article>
              ))}
            </section>
          </article>
          <aside>
            <h5>Последние посты</h5>
          </aside>
        </section>
      )}
    </>
  );
};

export default BlogCard;
