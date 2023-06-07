import styles from "./ContactPage.module.scss";
import { FC } from "react";

const ContactPage: FC = () => {
  return (
    <section className={styles.section}>
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
        <form className={styles.form}>
          <input
            className={styles.input}
            autoFocus
            name="Nickname"
            required
            placeholder="Ваш никнейм"
          />
          <input
            className={styles.input}
            name="email"
            type="email"
            required
            placeholder="Ваша почта"
          />
          <input
            className={styles.input}
            name="Subject"
            required
            placeholder="Тема сообщения"
          />
          <textarea
            className={styles.textarea}
            name="Message"
            required
            placeholder="Ваше сообщение"
          />
          <button className={styles.button} type="submit">
            Отправить сообщение
          </button>
        </form>
      </section>
    </section>
  );
};

export default ContactPage;
