import styles from "./ContactPage.module.scss";
import { FC } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypeForm } from "src/types/Form.type";

const ContactPage: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TypeForm>();

  const onSubmit: SubmitHandler<TypeForm> = (data) => {
    alert(data);
    reset();
  };
  return (
    <section className={styles.section}>
      <Toaster />
      <div>
        <img src="./img/pages/ContactPage/man.png" alt="Contact page" />
      </div>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h4 className={styles.title}>Оставьте нам сообщение</h4>
          <p className={styles.subtitle}>
            Пожалуйста, заполните форму ниже, чтобы связаться с нашей командой
            поддержки. Укажите ваши вопросы, предложения или проблемы, и мы
            сделаем все возможное, чтобы обеспечить вам качественную поддержку и
            оперативно решить возникшие вопросы.
          </p>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            placeholder="Ваш Никнейм"
            {...register("userName", { required: true })}
            className={styles.input}
          />
          <input
            placeholder="Ваша Почта"
            {...register("userEmail", { required: true })}
            className={styles.input}
            type="email"
          />
          <input
            placeholder="Тема сообщения"
            {...register("subject", {
              required: true,
            })}
            className={styles.input}
          />
          <textarea
            {...register("message", { required: true, minLength: 30 })}
            className={styles.textarea}
            placeholder="Ваше сообщение"
          />
          <input
            type="submit"
            className={styles.button}
            value="Отправить сообщение"
          />
        </form>
        <span style={{ display: "none" }}>
          {errors.userName && toast.error("Поле «Никнейм» обязательно")}
          {errors.userEmail && toast.error("Поле «Почта» обязательно")}
          {errors.subject && toast.error("Поле «Тема» обязательно")}
          {errors.subject && toast.error("Поле «Сообщение» обязательно")}
        </span>
      </section>
    </section>
  );
};

export default ContactPage;

{
  /* <form className={styles.form}>
<StateInput
  name="Nickname"
  maxLength={40}
  placeholder="Ваш никнейм"
  value={formInput.nickname}
  handleInput={(e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput({ ...formInput, nickname: e.target.value })
  }
/>
<StateInput
  name="email"
  maxLength={60}
  placeholder="Ваша почта"
  value={formInput.email}
  handleInput={(e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput({ ...formInput, email: e.target.value })
  }
/>
<StateInput
  name="subject"
  maxLength={200}
  placeholder="Тема сообщения"
  value={formInput.subject}
  handleInput={(e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput({ ...formInput, subject: e.target.value })
  }
/>
<StateTextarea
  name="message"
  placeholder="Ваше сообщение"
  value={formInput.message}
  handleInput={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setFormInput({ ...formInput, message: e.target.value })
  }
/>
<button
  className={styles.button}
  // type="submit"
  onClick={() => toast.success("Hello world")}
>
  Отправить сообщение
</button>
</form> */
}
