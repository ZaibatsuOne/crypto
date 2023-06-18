import Review from "src/components/layout/Review/Review";
import styles from "../BlogCard.module.scss";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type TypeCommentary = {
  nickName: string;
  email: string;
  message: string;
};

const BlogComment: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TypeCommentary>();

  const [comment, setComment] = useState<TypeCommentary[]>([]);

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
        {errors.email && toast.error("Поле «E-mail» обязательно к заполнению")}
        {errors.message &&
          toast.error("Поле «Комментарий» обязательно к заполнению")}
      </div>
      <section className={styles.comments}>
        {comment.map((item) => (
          <article className={styles.commentary}>
            <Review nameUser={item.nickName} commentaryUser={item.message} />
          </article>
        ))}
      </section>
    </>
  );
};

export default BlogComment;
