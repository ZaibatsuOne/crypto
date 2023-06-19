import Review from "src/components/layout/Review/Review";
import styles from "../BlogCard.module.scss";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { TypeReview } from "src/types/Review.type";

const BlogComment: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TypeReview>();

  const [comment, setComment] = useState<TypeReview[]>([]);

  const onSubmit: SubmitHandler<TypeReview> = ({
    nameUser,
    emailUser,
    commentaryUser,
  }) => {
    const review = {
      nameUser: nameUser,
      emailUser: emailUser,
      commentaryUser: commentaryUser,
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
            {...register("nameUser", {
              required: true,
            })}
            className={styles.input}
            placeholder="Никнейм"
          />
          <input
            {...register("emailUser", {
              required: true,
            })}
            className={styles.input}
            placeholder="E-mail"
          />
        </div>
        <textarea
          {...register("commentaryUser", { required: true })}
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
        {errors.nameUser &&
          toast.error("Поле «Никнейм» обязательно к заполнению")}
        {errors.emailUser &&
          toast.error("Поле «E-mail» обязательно к заполнению")}
        {errors.commentaryUser &&
          toast.error("Поле «Комментарий» обязательно к заполнению")}
      </div>
      <section className={styles.comments}>
        {comment.map((item) => (
          <article className={styles.commentary}>
            <Review
              nameUser={item.nameUser}
              commentaryUser={item.commentaryUser}
            />
          </article>
        ))}
      </section>
    </>
  );
};

export default BlogComment;
