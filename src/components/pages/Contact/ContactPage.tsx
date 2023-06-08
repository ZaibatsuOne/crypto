import StateInput from "src/components/ui/Form/StateInput/StateInput";
import styles from "./ContactPage.module.scss";
import { FC, useState } from "react";
import StateTextarea from "src/components/ui/Form/StateTextarea/StateTextarea";

type TypeForm = {
  nickname: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: FC = () => {
  const [formInput, setFormInput] = useState<TypeForm>({
    nickname: "",
    email: "",
    subject: "",
    message: "",
  });

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
          <button className={styles.button} type="submit">
            Отправить сообщение
          </button>
        </form>
      </section>
    </section>
  );
};

export default ContactPage;
