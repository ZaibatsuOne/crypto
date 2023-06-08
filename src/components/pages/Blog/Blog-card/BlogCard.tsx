import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import Review from "src/components/layout/Review/Review";
import StateInput from "src/components/ui/Form/StateInput/StateInput";
import styles from "./BlogCard.module.scss";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StateTextarea from "src/components/ui/Form/StateTextarea/StateTextarea";
import LiveAuction from "src/components/layout/LiveAuction/LiveAuction";

interface IBlogCard {
  id: number;
  title: string;
  img: string;
  userName: string;
  excerpt: string;
}
type TypeForm = {
  name: string;
  email: string;
  commentary: string;
};
type TypeComment = {
  nameUser: string;
  emailUser: string;
  commentaryUser: string;
};
const BlogCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<IBlogCard | null>(null);
  const [showForm, setShowForm] = useState<boolean>(true);
  const [formInput, setFormInput] = useState<TypeForm>({
    name: "",
    email: "",
    commentary: "",
  });

  const { name, email, commentary }: TypeForm = formInput;
  const [comment, setComment] = useState<TypeComment[]>([]);
  const handleCommentary = (
    name: string,
    email: string,
    commentary: string
  ) => {
    const maskEmail = "*".repeat(5) + email.substring(5, email.length);
    if (commentary.length <= 20)
      alert("Комментарий не может быть меньше 20 символов ");
    else {
      const article = {
        nameUser: name,
        emailUser: maskEmail,
        commentaryUser: commentary,
      };
      setComment([...comment, article]);
      setFormInput({
        name: "",
        email: "",
        commentary: "",
      });
      // setShowForm(!showForm);
    }
  };
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

  return (
    <>
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
              {showForm ? (
                <form className={styles.form}>
                  <h4>Оставьте комментарий</h4>
                  <div className={styles.group}>
                    <StateInput
                      name="name"
                      maxLength={20}
                      placeholder="Ваше имя"
                      value={formInput.name}
                      handleInput={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void =>
                        setFormInput({ ...formInput, name: e.target.value })
                      }
                    />
                    <StateInput
                      name="email"
                      maxLength={30}
                      placeholder="Почта"
                      value={formInput.email}
                      handleInput={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void =>
                        setFormInput({ ...formInput, email: e.target.value })
                      }
                    />
                  </div>
                  <StateTextarea
                    name="message"
                    placeholder="Комментарий"
                    value={formInput.commentary}
                    handleInput={(
                      e: React.ChangeEvent<HTMLTextAreaElement>
                    ): void =>
                      setFormInput({ ...formInput, commentary: e.target.value })
                    }
                  />
                  <button
                    onClick={(): void =>
                      handleCommentary(name, email, commentary)
                    }
                  >
                    <Button
                      icon={null}
                      text="Оставить комментарий"
                      background="#5142FC"
                    />
                  </button>
                </form>
              ) : null}
            </footer>
            <section className={styles.comments}>
              {comment.map((item) => (
                <article
                  key={item.commentaryUser}
                  className={styles.commentary}
                >
                  <Review
                    nameUser={item.nameUser}
                    commentaryUser={item.commentaryUser}
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
