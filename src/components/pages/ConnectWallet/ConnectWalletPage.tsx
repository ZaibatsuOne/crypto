import ConnectWalletItem from "./ConnectWallet-item/ConnectWalletItem";
import styles from "./ConnectWalletPage.module.scss";
import Title from "src/components/ui/title/Title";
import { FC } from "react";
import { walletList } from "src/ts/ConnectWallet";

const ConnectWalletPage: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Подключить кошелек" />
        <p className={styles.subtitle}>
          Просто и надежно: подключите ваш криптовалютный кошелек для удобного
          управления активами и безопасных транзакций
        </p>
      </header>
      <section className={styles.wrapper}>
        {walletList.map((item) => (
          <section className={styles.category} key={item.id}>
            <ConnectWalletItem
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
            />
          </section>
        ))}
      </section>
    </section>
  );
};

export default ConnectWalletPage;
